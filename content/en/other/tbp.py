import re

def func(x):
    return x.group(0)[0] + str(to_replace.get(int(x.group(1)), "NOT FOUND")) + x.group(0)[-1]

indexes = []

file = open("tbp_old.md", "r")

lines = file.readlines()
new_lines = []

is_list = False

for line in lines:
    new_line = line
    if not is_list:
        to_replace = {}
        ref_count = line.count("](#references)]")
        for i in range(1, ref_count + 1):
            index = line.split("<sup>[[")[i]
            index = index.split("](#references)]")[0]
            if index not in indexes:
                indexes.append(index)
                to_replace[int(index)] = indexes.index(index) + 1
            i += 1
        if ref_count == 1:
            new_line = new_line.replace("<sup>[[" + str(index) + "](#references)]", "<sup>[[" + str(indexes.index(index) + 1) + "](#references)]")
        elif to_replace:
            re_string = '[^0-9](' + '|'.join([f'({x})' for x in to_replace]) + ')[^0-9]'
            new_line = re.subn(re_string, func, line)[0]
    else:
        index = line.split(". ")[0]
        if index in indexes:
            index = indexes.index(index) + 1
            new_line = str(index) + ". " + line[(len(str(index)) + 2):]
    new_lines.append(new_line)

    if "# References" in line:
        is_list = True

with open("tbp.md", "w") as new_file:
    for new_line in new_lines:
        new_file.write(new_line)
