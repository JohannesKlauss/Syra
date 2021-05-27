#!/bin/sh

# Create a temporary filename
export nano=$(date +%s%N)$(($RANDOM%10000))

export IN=/tmp/$nano.mp3
export OUT=/tmp/$nano.flac

# Save stdin to a temp file
cat - > "${IN}"

ffmpeg -i "${IN}" -loglevel quiet -vn -c:a flac -f flac "${OUT}"

cat "${OUT}"

# After printing to stdout, the client has received the data via streaming
# Now we delete the temporary file
rm "${IN}"
rm "${OUT}"