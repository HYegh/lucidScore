export default function(score) {
    if(score <= 3.3){
      return "green"
    }

    if(score > 3.3 && score <= 5.3){
      return "orange"
    }

    if(score > 5.3){
      return "red"
    }
}