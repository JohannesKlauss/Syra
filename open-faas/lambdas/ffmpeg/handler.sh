#!/bin/sh

# Create a temporary filename
export nano=$(date +%s%N)

export IN=/tmp/$nano.wav
export OUT=/tmp/$nano.flac

# Save stdin to a temp file
cat - > "${IN}"

ffmpeg -i "${IN}" -loglevel quiet -vn -c:a flac -f flac "${OUT}"

cat "${OUT}" pipe:1

# After printing to stdout, the client has received the data via streaming
# Now we delete the temporary file
rm "${IN}"
rm "${OUT}"