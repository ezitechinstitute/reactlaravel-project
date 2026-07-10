import json
import os
import sys

def apply_replacements(content, chunks):
    for chunk in chunks:
        target = chunk['TargetContent']
        replacement = chunk['ReplacementContent']
        
        # We find all occurrences if AllowMultiple is true, else just one
        allow_multiple = chunk.get('AllowMultiple', False)
        
        if target and target in content:
            if allow_multiple:
                content = content.replace(target, replacement)
            else:
                content = content.replace(target, replacement, 1)
        else:
            try:
                print(f"Warning: Could not find target content: {target[:50]}...")
            except:
                print("Warning: Could not find target content (encoding error)")
            
    return content

def process_log(file_path):
    print(f"Processing {file_path}")
    if not os.path.exists(file_path):
        return
        
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
        
    for line in lines:
        try:
            data = json.loads(line)
        except:
            continue
            
        if 'tool_calls' in data:
            for call in data['tool_calls']:
                name = call.get('name')
                args = call.get('args', {})
                
                if name == 'write_to_file':
                    target_file = args.get('TargetFile')
                    code_content = args.get('CodeContent')
                    if target_file and code_content:
                        # Create directories if they don't exist
                        os.makedirs(os.path.dirname(target_file), exist_ok=True)
                        with open(target_file, 'w', encoding='utf-8') as tf:
                            tf.write(code_content)
                        print(f"Wrote to {target_file}")
                        
                elif name == 'replace_file_content':
                    target_file = args.get('TargetFile')
                    target = args.get('TargetContent')
                    replacement = args.get('ReplacementContent')
                    allow_multiple = args.get('AllowMultiple', False)
                    
                    if target_file and os.path.exists(target_file):
                        with open(target_file, 'r', encoding='utf-8') as tf:
                            content = tf.read()
                        
                        if target and target in content:
                            if allow_multiple:
                                content = content.replace(target, replacement)
                            else:
                                content = content.replace(target, replacement, 1)
                            with open(target_file, 'w', encoding='utf-8') as tf:
                                tf.write(content)
                            print(f"Replaced content in {target_file}")
                        else:
                            print(f"Could not find target in {target_file}")
                            
                elif name == 'multi_replace_file_content':
                    target_file = args.get('TargetFile')
                    chunks = args.get('ReplacementChunks', [])
                    
                    # Sometimes ReplacementChunks is a JSON string
                    if isinstance(chunks, str):
                        chunks = json.loads(chunks)
                        
                    if target_file and os.path.exists(target_file):
                        with open(target_file, 'r', encoding='utf-8') as tf:
                            content = tf.read()
                            
                        content = apply_replacements(content, chunks)
                        
                        with open(target_file, 'w', encoding='utf-8') as tf:
                            tf.write(content)
                        print(f"Multi-replaced content in {target_file}")

process_log('temp_about.jsonl')
process_log('temp.jsonl')
