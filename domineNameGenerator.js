let pronoun = ["the", "our", "this", "that"];
let adj = ["great", "big", "awesome", "amazing"];
let noun = ["jogger", "racoon", "pioneer", "artist"];
let extensions = [".com", ".es", ".net", ".ico"];

for (let p of pronoun) {
  for (let a of adj) {
    for (let n of noun) {
      for (let e of extensions) {
        console.log(p + a + n + e);
      }
    }
  }
}