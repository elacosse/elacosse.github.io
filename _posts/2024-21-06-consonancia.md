---
layout: distill
title: a distill-style blog post
description: an example of a distill-style blog post and main elements
tags: distill formatting
giscus_comments: true
date: 2021-05-22
featured: true

authors:
  - name: Eric Lacosse
    url: "https://elacosse.github.io"
    affiliations:
      name: Champalimaud Foundation, Lisbon, Portugal
bibliography: 2018-12-22-distill.bib

# Optionally, you can add a table of contents to your post.
# NOTES:
#   - make sure that TOC names match the actual section names
#     for hyperlinks within the post to work correctly.
#   - we may want to automate TOC generation in the future using
#     jekyll-toc plugin (https://github.com/toshimaru/jekyll-toc).
toc:
  - name: Introduction
    # if a section has subsections, you can add them as follows:
    # subsections:
    #   - name: Example Child Subsection 1
    #   - name: Example Child Subsection 2
  - name: ConsonâncIA - its conceptualization
  - name: Human-Machine
  - name: Human-Human
  - name: Human-self
  - name: Conclusion
  - name: Footnotes
  - name: Citations

# Below is an example of injecting additional post-specific styles.
# If you use this post as a template, delete this _styles block.
_styles: >
  .fake-img {
    background: #bbb;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 0px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 12px;
  }
  .fake-img p {
    font-family: monospace;
    color: white;
    text-align: left;
    margin: 12px 0;
    text-align: center;
    font-size: 16px;
  }
---


## Introduction

What does the future of treating human health look like in a world where humans are not the only ones talking and deciding? How would we ensure that this future is one we want to live and be medically treated in?

ConsonâncIA is an immersive audiovisual work that was hosted at Metamersion, an event that takes place at the Champalimaud Foundation in Lisbon, Portugal. The event combines perspectives from science, multimedia art, technology, and clinical healthcare to build immersive art-science exhibitions for the public and research community to experience. It has found its way to a third edition, growing from a small, improvised event to becoming an integral part of forming a wider initiative to establish the first Digital Therapeutics Center in the world. For three days (May 17th - 19th, 2024), Metamersion ran to display prototype experiences and art works, inspired by ongoing research developed from the Neuroscience program of the Champalimaud Centre for the Unknown, and how work coming primarily from fundamental neurosciences could bridge to clinical applications as digital therapeutics, i.e., "software as medicine." These installations leaned heavily on methodology from generative AI, computational neuroscience and other innovative technologies to generate new multimedia experiences. The public was also able to participate in immersive performance art, roundtable discussions, and multimedia concerts.

This year's Metamersion theme was "Healing Algorithms" and featured more installations than all previous years combined. What follows below are details about why and how the piece was conceptualized and what technical elements ultimately went into building it. Here you will find a "behind-the-scenes" look into what kind of thinking and process went into putting something like it together, from raw conceptualization to the experience displayed to the public.

## ConsonâncIA - its conceptualization


Consonância (Portuguese), or consonance (English), refers to a state of agreement or harmony between different elements in a system. ConsonâncIA was designed to provide an immersive experience at the intersection of machine and human expression and intelligence, encouraging visitors to imagine what form a healing experience of the future would take. That is, if machines could capture and mediate individual expressions of hurt or suffering, and ultimately work to help alleviate and heal from it. The essence of the word consonância tries to capture how machine intelligence aligning with an individual's desire for their own well-being could facilitate a healing experience that would bring about better consonance between others and ultimately themselves in the careful, intentional ways we need to think about in designing and deploying digital therapeutics. 

Overall, the motivation for ConsonâncIA is captured by themes of modern AI alignment research, emphasizing the need for AI systems that are in consonance with human values, their diverse ways of thinking, and perhaps most importantly, through fostering connections with others mediated through real empathy and mutual understandings, a feature current AI systems will completely lack for the foreseeable future. Achieving these objectives could ultimately contribute to our individual and collective well-being, the underlying goal of serving digital therapeutics.

AI alignment, broadly speaking, refers to the challenge of ensuring how increasingly capable AI systems can be steered to become trusted, aligning and respecting human values and goals. We, as architects of AI systems, need to solve the problem of how to create the robust mechanisms for these systems to act beneficially, in accordance with our societal ethics and preferences at large, i.e., a collective good. ConsonâncIA takes a broader view of the objectives present in alignment research that typically focuses on an isolated set of goals of individual humans and machines; instead, we as AI system designers need to take into consideration tractable goals that define alignment between other humans, i.e., human-human, and ultimately the alignment defining one's values/goals internally, i.e., human-self. Alignment objectives, emphasizing the context of deploying digital therapeutics, would be better served if we adopt this more holistic view accommodating human-human and human-self aspects into the alignment problem. These two objectives are often understood occupying a realm outside those of machines reaching in or mediating. ConsonâncIA demonstrates how these objectives can be considered together within the general AI alignment problem.

The following figure provides the conceptual basis through which ConsonâncIA with its three distinct elements should be seen -- machine, human, self -- and constitute what we refer to as the alignment triad. Each part of the immersive audiovisual work provided a distinct experience that corresponded to one of these three elements of this triad where the underlying interaction focus of the experience was between either machine, human, or self.


<div class="mt-3">
    {% include figure.liquid loading="eager" path="assets/img/consonancia/triad.png" class="img-fluid rounded z-depth-1" zoomable=true %}
</div>

## Machine-human

 The initial task was to gather information from human participants at the installation with the intention of building a cognitive map of their unique experience with hurt. This should be done in a way respects their autonomy or willingness to share information. Further, how do we perform rich and accurate human cognitive mapping without relying on expensive and taxing neuroimaging or controlled behavioral experimentation? We utilize conversational language agents to collect information from humans at scale. Conversational Language Agents (CLA), also known as chatbots or dialogue systems, are AI systems designed to engage in human-like conversations. The main goal of CLAs are to provide subjects with an experience modeled from a natural interaction, akin to how one would communicate with another person. It is an exciting research direction to understand how CLAs should carry out conversations with specific, underlying goals of collecting self-reported data from humans in the domains we wish to map. Conventional approaches, like surveys or forms, rely on highly constrained preconceptions of what information should be asked and remain limited for that reason. In understanding pain, for instance, most clinical studies have highly constrained notions of what qualities pain manifest. This is a major reason why pain is so difficult to examine and treat. The lack of clear, objective measures, its multifactorial nature holding both complex cognitive and physical components, and the subjective nature of describing pain all make it extremely difficult for clinicians to deal with patient symptoms appropriately.

This is where inspiration from different research methodologies common within the humanities may enable new kinds of science to be conducted and why CLAs may offer new means of achieving new results in domains where research has stifled. Qualitative research methodology focuses on understanding human experience from the perspective of those who live them. The field of phenomenology, originally rooted in early 20th century work following the philosophy of Edmund Husserl, is a well-established approach that at its core focuses on exploring and describing people's lived experienced as reported from their own perspective and words. It primarily follows from conducting in-depth interviewers and observations to gather common themes and structures within an individual's lived experience. These data largely follow from self-report gathered by human interviewing. Characteristic in these investigations is the focus of collecting data in naturalistic settings where participants engage in contexts of their normal, everyday activities. Researchers are able to observe behaviors and interactions in their real-life contexts and environments as opposed to the highly constrained laboratory ones.  Although conventional laboratory investigations yield greater control, they also require researchers to ignore dimensions to an individual's own experience that fall outside of preconceived notions of the experimenter. Phenomenological investigations hope to gather additional information that help structure and improve upon any preconceived notions that an experimenter may have or are simply limited to because of the particular environments and structure demanded from these investigations in typical laboratory settings.

So far, rule-based chatbots of the past have not been able to generate the depth of conversation necessary to leverage phenomenological approachs. These older chatbots quickly exhaust possible conversational flows. Most qualitative research investigations necessitate nuanced intuitions from humans conducting interviewers to understand what questions and conversation flows are needed to engage subjects such that they gather necessary and relevant information in a way that emulates the methodology a human would. Newer machine learning methodology has greatly change our ability to design CLAs that rival even human abilities; pre-trained language models, i.e., Large Language Models (LLMs), have enabled powerful text generation capabilities that continue to improve in terms of their human-like ability to hold conversations that accord with human conversational nuance and intuitions. These models are mainly based on large transformer architectures that rely on pre-training over massive amounts of text corpora generated by humans. They also rely heavily on further fine-tuning via preference alignment techniques like Reinforcement Learning with Human Feedback (RLHF). 

CLAs are not only limited to interaction with text, however. For ConsonâncIA, we incorporated additional capabilities for the CLA to understand aspects of the subjects external environment by allowing them to send images to the CLA. This ability was made possible by Vision Language Models (VLMs), i.e., multimodal models that learn from both images and text. These models have shown promising zero-shot ability and generalize across most image domains. Additionally, subjects, if they chose so, could interact with the CLA via speaking to it. Speech audio was transcribed using the latest Speech-To-Text (STT) models.

Advancements in generative AI have not only greatly enhanced text generation capabilities, but have also paved the way for the development of generative image models, such as DALL-E or and Stable Diffusion. In this exploration, we created a novel form of conversational narrative. It harnessed the power of these generative models through enriching the conversation by integrating them seamlessly with generative images. The motivation for this was multifold and mainly sought to aid in capturing rich, descriptive experiences from individuals. Images possess the power to evoke strong emotional responses, adding a layer of complexity words alone cannot capture. Memories often surface when we encounter an image, as it can trigger a familiar scene, object, place, or experience, inviting us to navigate between spaces of recollection and imagination. These phenomena enhance the CLA cognitive mapping objectives. Furthermore, the inclusion of generative images engages the subject in a more profound interpretation and interaction with the conversation. By incorporating images into a conversational narrative, a certain depth and meaning can transcend words, blurring the boundaries between the past, present, and imagined states. These aspects together produced a narrative that enhanced the normal (and rather dull) conversational narratives individuals have on their mobile phones.

<div class="mt-3">
    {% include figure.liquid loading="eager" path="assets/img/consonancia/CLA.png" class="img-fluid rounded z-depth-1" zoomable=true %}
</div>
