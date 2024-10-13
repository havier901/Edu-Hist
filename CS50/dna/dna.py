import csv
import sys


def main():
    # Check for command-line usage
    if len(sys.argv) != 3:
        sys.exit("Usage: ./dna [database] [sequence]")

    # Read database file into a variable
    people = []
    database = sys.argv[1]

    with open(database) as csvfile:
        for person in csv.DictReader(csvfile):
            people.append(person)

    # Read DNA sequence file into a variable
    sequencefile = sys.argv[2]

    with open(sequencefile) as file:
        DNA = file.read()

    # Find longest match of each STR in DNA sequence
    counts = {}
    SUB = []
    checker = 0

    for key in people[0]:
        SUB.append(key)
    SUB.pop(0)

    for sub in SUB:
        counts[sub] = longest_match(DNA, sub)

    for person in people:
        for sub in SUB:
            if int(person[sub]) == int(counts[sub]):
                checker += 1
            elif int(person[sub]) != int(counts[sub]):
                checker = 0
            if checker == len(SUB):
                print(person["name"])
                return
    print("No match")
    return


def longest_match(sequence, subsequence):
    """Returns length of longest run of subsequence in sequence."""

    # Initialize variables
    longest_run = 0
    subsequence_length = len(subsequence)
    sequence_length = len(sequence)

    # Check each character in sequence for most consecutive runs of subsequence
    for i in range(sequence_length):
        # Initialize count of consecutive runs
        count = 0

        # Check for a subsequence match in a "substring" (a subset of characters) within sequence
        # If a match, move substring to next potential match in sequence
        # Continue moving substring and checking for matches until out of consecutive matches
        while True:
            # Adjust substring start and end
            start = i + count * subsequence_length
            end = start + subsequence_length

            # If there is a match in the substring
            if sequence[start:end] == subsequence:
                count += 1

            # If there is no match in the substring
            else:
                break

        # Update most consecutive matches found
        longest_run = max(longest_run, count)

    # After checking for runs at each character in seqeuence, return longest run found
    return longest_run


main()
