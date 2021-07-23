# Auto-generated code below aims at helping you parse
# the standard input according to the problem statement.

read -r R
read -r L

for ((i=1; i<$L; i++)); do
    t=""
    p=""
    j=0

    for c in $R; do
        if [[ "$p" == "" ]]; then
            p=$c
            ((j++))
        elif [[ "$p" == "$c" ]]; then
            ((j++))
        else
            t="$t$j $p "
            p=$c
            j=1
        fi
    done
    R="$t$j $c"
done

echo $R