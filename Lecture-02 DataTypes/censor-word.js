function censorWord(sentence, wordToCensor) {
  // สร้าง RegExp object โดยมี 'gi' flag
  // 'g' = global (ทุกตำแหน่ง)
  // 'i' = case-insensitive (ไม่สนใจตัวพิมพ์เล็ก/ใหญ่)
  const regex = new RegExp(wordToCensor, "gi");
  const censoredText = sentence.replace(regex, "***");
  return censoredText;
}

const originalPost =
  "JavaScript is fun, but sometimes javascript can be tricky.";
const cleanPost = censorWord(originalPost, "javascript");

console.log(cleanPost);
// Output: *** is fun, but sometimes *** can be tricky.