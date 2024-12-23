function encrypt(text, n) {
    console.log(text, n);
    if (!text || n <= 0) return text; 
    while (n--) {
      let ans = '';
      for (let i = 1; i < text.length; i += 2) {
        ans += text[i];
      }
      for (let i = 0; i < text.length; i += 2) {
        ans += text[i];
      }
      text = ans;
    }
    return text;
  }
  
  function decrypt(encryptedText, n) {
    if (!encryptedText || n <= 0) return encryptedText;
    const ans = new Array(encryptedText.length);
    while (n--) {
      let j = 0;
      for (let i = 1; i < ans.length; i += 2) {
        ans[i] = encryptedText[j++];
      }
      for (let i = 0; i < ans.length; i += 2) {
        ans[i] = encryptedText[j++];
      }
      encryptedText = ans.join('');
    }
    return encryptedText;
  }

    //string and integer
    //returning all the odd indexed characers of s concated with even indexed characters
    //repeat n times
    
    // encrypt("012345", 1)  =>  "135024"
    // encrypt("012345", 2)  =>  "135024"  ->  "304152"
    // encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"
    
    // encrypt("01234", 1)  =>  "13024"
    // encrypt("01234", 2)  =>  "13024"  ->  "32104"
    // encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"