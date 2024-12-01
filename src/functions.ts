import { generateSlugsType } from "./types";

export function generate_slugs(options:generateSlugsType) {
  
  let slug = "";
  let replace : string = "-";
  if (options.replace) {
     replace = options.replace;
     if (options.remove) {
         options.text = options.text.replace(options.remove,"");
    }
  }
  

  for (let i = 0; i<options.text.length; i++) {
    if (options.text[i] == " " && slug[slug.length - 1] != replace) {
        slug += replace;
        continue;
    } else if(options.text[i] != " ") {
        slug += options.text[i];
    }
  }

  return slug;

}





