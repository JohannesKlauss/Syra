#!/bin/sh

# Create a temporary filename
export nano=$(date +%s%N)$(($RANDOM%10000))

export IN=/tmp/$nano.flac
export OUT=/tmp/$nano.json

# Save stdin to a temp file
cat - > "${IN}"

audiowaveform -i "${IN}" -b 8 --pixels-per-second 150 --output-format json --input-format flac -o "${OUT}" >/dev/null 2>&1

cat "${OUT}"

# After printing to stdout, the client has received the data via streaming
# Now we delete the temporary file
rm "${IN}"
rm "${OUT}"