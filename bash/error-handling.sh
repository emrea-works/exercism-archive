
main () {
  echo $@
  if [ "$#" -eq 1 ]; then
    echo "ok"
  else
    echo "not ok"
  fi  
}

main "$@"
