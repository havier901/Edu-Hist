from cs50 import get_string

# index = 0.0588 * L - 0.296 * S - 15.8
# L is average number of letter per 100 words (L/W * 100), S is avg number of sentences per 100 words (S/W * 100)


def main():
    text = get_string("Text: ")
    letters = count_letters(text)
    words = count_words(text)
    sentences = count_sentences(text)

    index = (
        0.0588 * (float(letters) / words) * 100
        - 0.296 * (float(sentences) / words) * 100
        - 15.8
    )

    if index >= 1 and index < 16:
        index = round(index)
        print(f"Grade {index}")
    elif index < 1:
        print("Before Grade 1")
    elif index >= 16:
        print("Grade 16+")


def count_letters(text):
    letters = 0
    for letter in text:
        if letter.isalpha():
            letters += 1
    return letters


def count_words(text):
    words = 1
    for char in text:
        if char.isspace() == True:
            words += 1
    return words


def count_sentences(text):
    sentences = 0
    for char in text:
        if char == "." or char == "!" or char == "?":
            sentences += 1
    return sentences


main()
