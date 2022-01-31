---
title: "2022 posts"
excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus."
coverImage: "/assets/blog/dynamic-routing/cover.jpg"
date: "2022-01-16T05:35:07.322Z"
author:
  name: JJ Kasper
  picture: "/assets/blog/authors/jj.jpeg"
ogImage:
  url: "/assets/blog/dynamic-routing/cover.jpg"
---

This is my first post on my new fake blog! How exciting!

I'm sure I'll write a lot more interesting things in the future.

Oh, and here's a great quote from this Wikipedia on
[salted duck eggs](https://en.wikipedia.org/wiki/Salted_duck_egg).

> A salted duck egg is a Chinese preserved food product made by soaking duck
> eggs in brine, or packing each egg in damp, salted charcoal. In Asian
> supermarkets, these eggs are sometimes sold covered in a thick layer of salted
> charcoal paste. The eggs may also be sold with the salted paste removed,
> wrapped in plastic, and vacuum packed. From the salt curing process, the
> salted duck eggs have a briny aroma, a gelatin-like egg white and a
> firm-textured, round yolk that is bright orange-red in color.

You can also write code blocks here!

```css
.post-body pre {
  background-color: #1e1e1e;
  padding: 16px;
  border-radius: 4px;
  overflow: auto;
  font-size: 14px;
  margin-bottom: 4.1rem;
  padding: 2rem 0 0.5rem 0.4rem;
  border-radius: 12px;
  overflow: hidden;
  background-image: url(../images/window-buttons.png);
  background-repeat: no-repeat;
  background-size: 44px 10px;
  background-position: 16px 14px;
}
```

## O contra diu

This is simple text and not some `code` to show in the line.

```javascript
export default function PostPage({
  frontmatter: { title, date, cover_image, category, technology },
  slug,
  content,
}: any) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      Prism.highlightAll();
    }
  }, []);
```

```javascript
// edit your webpack configuration in next.config.js
const markdownIt = require('markdown-it');
const markdownItPrism = require('markdown-it-prism');

module.exports = {
  webpack: configuration => {
    configuration.module.rules.push({
    test: /\.md$/,
    loader: 'frontmatter-markdown-loader',
    options: {
      markdownIt: markdownIt({ html: true }).use(markdownItPrism),
    });
    return configuration;
  },
});

```

```shell
npm install creat-react-app
```

```javascript
const saltyDuckEgg = "chinese preserved food product";
```

```html
const saltyDuckEgg = "chinese preserved food product"
<h1>Hola</h1>
```

```css
.test {
  color: red;
  background: lightblue;
}
```

```console
const saltyDuckEgg = "chinese preserved food product"
```

[View raw (TEST.md)](https://raw.github.com/adamschwartz/github-markdown-kitchen-sink/master/README.md)

`kjhgkjhg`

# Header 1

## Header 2

# Header 1

## Header 2

### Header 3

#### Header 4

##### Header 5

###### Header 6

# Header 1

## Header 2

### Header 3

#### Header 4

##### Header 5

###### Header 6

######

> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.

    > Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.

> ## This is a header.
>
> 1. This is the first list item.
> 2. This is the second list item.
>
> Here's some example code:
>
> Markdown.generate();

- Red
- Green
- Blue

* Red
* Green
* Blue

- Red
- Green
- Blue

```markdown
- Red
- Green
- Blue

* Red
* Green
* Blue

- Red
- Green
- Blue
```

- `code goes` here in this line
- **bold** goes here

```markdown
- `code goes` here in this line
- **bold** goes here
```

1. Buy flour and salt
1. Mix together with water
1. Bake

```markdown
1. Buy flour and salt
1. Mix together with water
1. Bake
```

1. `code goes` here in this line
1. **bold** goes here

```markdown
1. `code goes` here in this line
1. **bold** goes here
```

Paragraph:
