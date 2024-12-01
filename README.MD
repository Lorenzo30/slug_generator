
# Slug Generator
import { generate_slugs } from "slug_generator_simple"

generate_slugs({text:"simple text"}); //simple-text
 
// if you prefer something other than '-' as separator
    generate_slugs({text:"simple text","_"}); //simple_text
