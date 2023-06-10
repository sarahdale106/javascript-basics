let vocab = [
  ['happy', 'cheerful', 'glad'],
  ['tired', 'sleepy', 'drained'],
  ['excited', 'eager', 'animated']
  ];
  
  for (let i = 0; i < vocab.length; i += 1) {
    let synonyms = vocab[i]; //iterate over the array and create a new variable if index[i]
    for (let j = 0; j < synonyms.length; j += 1) {
      console.log(synonyms[j]); //log the contents of sub-array synonyms
    }
  }