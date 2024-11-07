from docx import Document

def read_word_file(file_path):
    # Load the document
    doc = Document(file_path)

    # Initialize an empty string to hold the text
    full_text = []

    # Iterate through each paragraph in the document
    for paragraph in doc.paragraphs:
        full_text.append(paragraph.text)

    # Join all the paragraphs into a single string
    return '\n'.join(full_text)

# Example usage
file_path = ''  # Replace with your file path
text = read_word_file(file_path)
print(text)
