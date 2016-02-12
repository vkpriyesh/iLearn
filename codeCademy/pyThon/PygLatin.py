pyg = 'ay'

original = raw_input('Enter a word:')
word = original.lower()
first = word[0]
new_word = word + first + pyg
s = new_word
new_word = s[1:len(new_word)] #slicing the word
if len(original) > 0 and original.isalpha():
    print s
else:
    print 'empty'
