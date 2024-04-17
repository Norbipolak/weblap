/*
Mik azok a block elementek?

Block-level elements in HTML are those that typically 
start on a new line and occupy the full width of their parent container by default. 
They create "blocks" of content within the document structure. Some common block-level elements include:

<div>: A generic container element used for grouping and styling content.

<p>: Represents a paragraph of text.

<h1>, <h2>, <h3>, <h4>, <h5>, <h6>: Heading elements from level 1 to 6, used to define headings of different levels.

<ul>: Represents an unordered list, typically rendered with bullet points.

<ol>: Represents an ordered list, typically rendered with sequential numbers or letters.

<li>: Represents a list item within <ul> or <ol> lists.

<header>: Represents introductory content, often containing headings, logos, or navigation.

<footer>: Represents the footer of a document or section, typically containing metadata or copyright information.

<section>: Represents a thematic grouping of content within a document.

<article>: Represents a self-contained piece of content that can be distributed and reused independently.

<nav>: Represents a section of navigation links.

<main>: Represents the main content area of the document.
***********************************************************************************************************
/*
ha most ez a kép src-és lenne, így lehetne középre tenni 
.container {
  height: 700px; Set the height of the container
  overflow: hidden;  Hide any overflow content 
}

.image {
  max-height: 100%; Ensure the image does not exceed the height of the container
  width: auto; Allow the width to adjust automatically to maintain aspect ratio
  display: block; Ensure the image behaves as a block element 
  margin: 0 auto;  Center the image horizontally within the container 
}
de ezt mi nem így szoktuk 
**************************************************************************
ha mondjuk túlcsordulás van egy szöveg esetében és kimegy 
-> 

To prevent text from overflowing outside a box when it's too long, you can use CSS to apply text overflow handling. 
There are several CSS properties you can use to achieve this, depending on the desired behavior:

1. Overflow: hidden: 
This property simply hides any content that overflows the box. 
It doesn't provide any indication that content is hidden, so it's not ideal for cases where the hidden content is important.

.box {
  overflow: hidden;
}

2. Overflow: scroll: 
This property adds a scrollbar to the box when the content overflows. 
Users can then scroll to see the hidden content.

.box {
  overflow: scroll;
}

3. Overflow: auto: 
This property adds a scrollbar to the box only when the content overflows. 
If the content fits within the box, no scrollbar is shown.
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!legjobb

.box {
  overflow: auto;
}

***************************************************************************************************

When you position an element absolutely within its container, you can use the top, right, bottom, and left properties to 
specify where you want the element to be placed relative to the edges of its containing block.

When you set top: -16px; on an absolutely positioned element, 
it means you are positioning the top edge of the element 16 pixels above the top edge of its containing block. 
In other words, the element will be shifted upward by 16 pixels relative to where it would normally be placed within the containing block.

For example, consider the following CSS:

.absolute-element {
  position: absolute;
  top: -16px;
}
If .absolute-element is inside a relatively positioned container, setting top: -16px; 
would move the top edge of the .absolute-element 16 pixels above the top edge of the container. 

If the .absolute-element is not inside a relatively positioned container, 
it will be positioned relative to the nearest positioned ancestor, or if there is none, 
relative to the initial containing block (usually the viewport).
*/