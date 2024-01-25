---
title: Master the Fundamentals of Computer Science
description: 'Learning the fundamentals of computer science is key to growing as an engineer, especially for non-CS grads.'
image: /static/img/posts/master-the-fundamentals.jpg
date: "2024-01-24"
---

I’m a big believer in learning the fundamentals or first principles of a subject. If you truly master the basics of subjects like math, writing, programming, physics, etc. you will go far.

Elon Musk did a reddit AMA, where he stated: "One bit of advice: it is important to view knowledge as sort of a semantic tree — make sure you understand the fundamental principles, ie the trunk and big branches, before you get into the leaves/details or there is nothing for them to hang on to."

I felt that I had learned a good amount of programming, but I wanted to go back and deeply strengthen the trunk of my CS knowledge tree.

I’ve been going through the amazing Harvard CS50 online course. If you would like to learn the fundamentals of CS, I can’t think of a better resource.

Here are some of my favorite takeaways:

## 1. Problem Solving in CS

<img src="/static/img/posts/master-fundamentals/black-box.png" alt="Black Box" width="500"/>

There is an Input and there is an Output. In between Input and Output is a black box.

The black box can be more or less complex, but at the end of the day, everything in CS is a simple matter of transforming some input into your desired output.

## 2. Information Representation

<img src="/static/img/posts/master-fundamentals/zeros-and-ones.jpeg" alt="Zeros and Ones" width="500"/>

You have to decide how you’ll represent information. In real life, this could be numerically, with fingers on a hand, with a drawing, or with a gesture.

Computers simply use 0’s and 1’s. The trick is how do you represent different information (e.g. sound, video, pictures, etc.) with 0’s and 1’s?

0’s and 1’s can be used to represent anything, so long as they’re properly configured.

## 3. Binary

<img src="/static/img/posts/master-fundamentals/binary.png" alt="Binary" width="500"/>

Computers are simple at their core – they use binary: 0’s and 1’s

Binary is base 2. There are only 2 options: a 0 or a 1.

The 0’s and 1’s are known as bits. Bits is short for binary digits.

The only physical input into your machine tends to be electricity. Harnessing that electricity, you can represent information with it. Light off = 0, light on = 1.

With one lightbulb, we can represent 2 options (on or off). With 3 lightbulbs, we can represent 8 options.

Bit = the smallest unit of computer information. Either a 0 or a 1.

Byte = 8 bits. This is generally enough storage to represent one character. Think of a byte as 8 lightbulbs, which can represent 256 different options.

Inside a computer are millions (or more) of tiny little switches that can represent on/off 0 or 1.

## 4. Representing Large Numbers

<img src="/static/img/posts/master-fundamentals/large-numbers.png" alt="Large number" width="500"/>

To represent large numbers, we do it the same way that standard base 10 numbers work. 123 is just a 1 in the 10^2 place, a 2 in the 10^1 place, and a 3 in the 10^ 0 place.

In the world of binary, you just have a 0 or a 1 in the 2^0 place, 2^1 place, 2^2 place, and so on.

000 is 0, 001 is 1, 010 is 2, 011 is 3, 100 is 4, 111 is 7…

## 5. Representing Letters

<img src="/static/img/posts/master-fundamentals/binary-to-letter.png" alt="Binary to letter" width="500"/>

It would seem as though the only thing that computers can do is compute. How can a computer represent not just numbers, but letters of the alphabet?

We assign the numbers in binary to a particular number.

Capital A is represented by 65 (aka 1000001) in binary.

## 6. Representing Images

<img src="/static/img/posts/master-fundamentals/binary-to-color.png" alt="Binary to color" width="500"/>

We can represent things other than numbers and letters. For instance, RGB (red, green, blue) is a method for representing colors in binary.

The amount of red, green, and blue are each represented on a scale from 0 to 255. In doing so, you can represent any color through binary.

Every pixel uses 24 bits or 3 bytes. For a video file, it’s just a ton of bits (e.g. 2 GB). If you keep changing the RGB of the pixels super rapidly over time, you make a video.

## 7. Putting it All Together

<img src="/static/img/posts/master-fundamentals/connecting-always-sunny.jpeg" alt="Putting it all together" width="500"/>

Why are there all sorts of file types (e.g. JIF, JPG, MOV, doc, etc.)? That is just saying that there is an agreement on how we’re going to take the bits and represent them on the computer screen.

As long as we agree upon the representation of data and how it is done with 1’s and 0’s, we just have an Input→ Black Box → Output. So…what goes on in the black box?

Algorithms!

Algorithms are step by step instructions to solve problems.

Using algorithms along with representing information properly, you can do basically anything with a computer.

I learned web development through a coding bootcamp and plenty of self-study, but am seeking to improve my computer science understanding.

CS50 is an extraordinarily well-crafted program for learning the key concepts of computer science.

Best of all, it’s all available for free on YouTube!

<div class="iframe-wrap">
    <iframe src="https://www.youtube.com/watch?v=YoXxevp1WRQ&list=PLhQjrBD2T382_R182iC2gNZI9HzWFMC_8"></iframe>
</div>
I’d highly recommend checking it out if you have any interest in programming.