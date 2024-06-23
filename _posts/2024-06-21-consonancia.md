---
layout: distill
title: ConsonâncIA
description: AI Alignment, Cognitive Maps, and the future of Digital Therapeutics
tags: therapeutics, AI, art, science
giscus_comments: true
date: 2024-06-21
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
  - subsections:
      - name: Human-Machine
      - name: Human-Human
      - name: Human-Agent
  - name: Conclusion
  - name: Credits
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

What does the future of treating human health look like in a world where humans are not the only ones talking and deciding?

ConsonâncIA is an immersive audiovisual work that was hosted at Metamersion, an event that takes place at the Champalimaud Foundation in Lisbon, Portugal, that sought to provide an answer to that question. The event combines perspectives from science, multimedia art, technology, and clinical healthcare to build immersive art-science exhibitions for the public and research community to experience. It has found its way to a third edition, growing from a small, improvised event to becoming an integral part of forming a wider initiative to establish the first Digital Therapeutics Center in the world. For three days (May 17th - 19th, 2024), Metamersion ran to display prototype experiences and art works, inspired by ongoing research developed from the Neuroscience program of the Champalimaud Centre for the Unknown, and how work coming primarily from fundamental neurosciences could bridge to clinical applications as digital therapeutics, i.e., "software as medicine." These installations leaned heavily on methodology from generative AI, computational neuroscience and other innovative technologies to generate new multimedia experiences. The public was also able to participate in immersive performance art, roundtable discussions, and multimedia concerts.

This year's Metamersion theme was "Healing Algorithms" and featured more installations than all previous years combined. What follows below are details about why and how the piece was conceptualized and what technical elements ultimately went into building it, from raw conceptualization to the elements that made up the experience displayed to the public.

## ConsonâncIA - its conceptualization

Consonância (Portuguese), or consonance (English), refers to a state of agreement or harmony between different elements in a system. ConsonâncIA, the complete installation from the software systems to set design, was constructed to provide an immersive experience at the intersection of machine and human expression and intelligence. All together, it encouraged visitors to imagine what form a healing experience of the future would take. That is, if machines could capture and mediate individual expressions of hurt or suffering, and ultimately work with them or a group to help alleviate and heal from it. The essence of the word consonância tries to capture how machine intelligence aligning with an individual's desire for their own well-being or self-care would facilitate a healing experience that could bring about better consonance between others and ultimately themselves in the careful, intentional ways we need to think about in designing and deploying digital therapeutics.

Overall, the motivation for ConsonâncIA relates to themes of modern AI alignment research, emphasizing the need for AI systems that are in consonance with human values, their diverse ways of thinking, and perhaps most importantly, through fostering connections with others mediated through real empathy and mutual understandings, a feature current AI systems will completely lack for the foreseeable future. Achieving these objectives could ultimately contribute to our individual and collective well-being, the underlying goal of serving digital therapeutics. Rather than seeing alignment objectives as a static relation between AI and human systems, we see AI, especially in the context transformative technologies that serve administering digital therapuetics, serving as an _interventionalist_ role. That intervention would serve to create

AI alignment, broadly speaking, refers to the challenge of ensuring how increasingly capable AI systems can be steered to become trusted, aligning and respecting human values and goals. We, as architects of AI systems, need to solve the problem of how to create robust mechanisms for these systems to act beneficially, in accordance with our societal ethics and preferences at large, i.e., a collective good. ConsonâncIA takes a broader view of the objectives present in alignment research that typically focuses on an isolated set of goals of individual humans and machines; instead, we suggest that consideration of tractable goals defining alignment objectives between other humans, i.e., human-human, and ultimately the alignment defining one's values/goals internally, i.e., human-self, are important. Alignment objectives, emphasizing the context of deploying digital therapeutics, would be better served if we adopt this more holistic view accommodating human-human and human-self aspects into the alignment problem at large. These two objectives are often understood occupying a realm outside those of machines reaching in or mediating. ConsonâncIA demonstrates how these objectives can be considered together within the general AI alignment problem in the context of serving digital therapuetics.

The following figure provides the conceptual basis through which ConsonâncIA with its three distinct elements should be seen -- agent, human, self -- and constitute what we refer to as an alignment triad. Each part of the immersive audiovisual work provided a distinct experience that corresponded to one of these three elements of this triad where the underlying interaction focus of the experience was between either AI agent, human, or self.

<div class="mt-3">
    {% include figure.liquid loading="eager" path="assets/img/consonancia/triad.png" class="img-fluid rounded z-depth-1" zoomable=true %}
</div>
<div class="caption">
Figure 1: the "Agent-Human-Self Alignment Triad" diagram illustrates the conceptual framework for ConsonâncIA. Synthetic Agent, Humans, and Self, as three interconnected stages of experience. (1) Conversational Experience (Agent level): The initial conversational interaction between the AI and human. (2) Interactive Social Graph (Human level): A representation of social relationships unconvered from the agent and mapped visually. (3) Personalized Experience (Self level): The culmination of a tailored, potentially perspective-shifting (simulated) healing experience for the individual. The diagram poses questions about an AI's ability to map information from conversations, construct meaningful social graphs, and create personalized experiences that offer beneficial insights for users. This framework extends beyond the alignment problem that considers the isolated relation of human system to AI ones, emphasizing the potential for AI to facilitate richer, more meaningful human experiences that reach into groups and notions of self.
</div>

## Human-Agent

> “Memories lie slumbering within us for months and years, quietly proliferating, until they are woken by some trifle and in some strange way blind us to life.”
>
> W.G. Sebald (1944-2001), The Rings of Saturn

The initial task was to gather information from human participants at the installation with the intention of building a cognitive map of their unique experience with hurt if they chose to share it, respecting their autonomy or willingness to share information.<d-footnote>Imagine you are exploring a new building without a physical map or GPS. How do you keep track of where you have been and where to go so you can find your way around? Neuroscientists and psychologists have yielded insight strongly suggestive that humans and animals create cognitive maps -- representations of their environments in their "mind's eye" that organize previous experiences to support flexible spatial navigation. This idea was first proposed in the 1940s by the psychologist Edward Tolman. He theorized that animals do not just form linked memories, i.e. as the behaviorist perspective popular at the time advocated for, but actually construct useful maps of the environment, even without necessarily being rewarded for it. The later Nobel prize winning discoveries of spatially modulated cells in the hippocampus and entorhinal cortex regions demonstrated that those brain regions are encoding what we now understand to be spatial cognitive maps. But, cognitive maps are not only sensitive to spatial navigation contexts. Later research has extended into a variety of non-spatial domains into arbitrary levels of abstraction. The same hippocampal-entorinal circuit in earlier work has a demonstrated importance in encoding features like sound, time, and abstract features involved in concept formation or social information, encoding information and memory relationally in way that can be used to solve tasks an animal encounters. The encoding of these relations within the brain enable an ability to perform inference in tasks, everything from chess playing to decision making that make up the basic intuitions behind an animal's survival instincts. Because of the generality offered by cognitive maps, conceptually it offers us a powerful grounding to understand what we should aim to study and explore as neuroscientists looking to understand and enrich human experience. Moreover, it offers us a way to relate how neurobiology and machines share commonalities that are useful to understand, both from an interventionist and engineering perspective. In much the same way modern machine learning builds models from data to yield patterns from which we make predictions that generalize, cognitive maps are the central concept from which a common latent space can form between machine and human. Much research within AI alignment falls within this domain and is known as representational alignment. That is, measuring and building the internal representations that form some of the same structures between humans and AI systems upon which inference is performed. It is believed that through understanding and eliciting commonalities between these two representations, i.e., the biological and in-silico, we can make AI systems better and more human-like. These neurobiologically inspired features may enable more flexible, efficient intelligences, or perhaps more importantly, offer underlying mechanisms that enable machines to better understand humans. Much research remains; although there is considerable agreement among scientists that our minds hold these internal cognitive maps, it is much less clear how they form and which structure they take to represent the world outside our minds for accomplishing the everyday tasks animals perform. Long-term adherence is needed in order for digital therapeutic applications to create lasting behavioral changes necessary to produce a measurable health benefit. Conversational AI has enormous potential to promote easier adoption into people's daily lives and hence a long-term adherence. Using distance and similarity metrics to map latent spaces enables AI to build effective internal representations of complex data. Incorporating attention and transfer learning improves these cognitive maps, allowing focus on critical elements and rapid adaptation to new scenarios. These techniques make the AI representations flexible, context-aware, and powerful for multimodal tasks.</d-footnote> How do we perform rich and accurate human cognitive mapping without relying on expensive and taxing neuroimaging or controlled behavioral experimentation? We use conversational language agents to collect information from humans at scale. Conversational Language Agents (CLA), also known as chatbots or dialogue systems, are AI systems designed to engage in human-like conversations. The main goal of CLAs are to provide subjects with an experience modeled from a natural interaction, akin to how one would communicate with another person. It is an exciting research direction to understand how CLAs should carry out conversations with specific, underlying goals of collecting self-reported data from humans in the domains we wish to map. Conventional approaches, like surveys or forms, rely on highly constrained preconceptions of what information should be asked and remain limited for that reason. In understanding pain, for instance, most clinical studies have highly constrained notions of what qualities pain manifest. This is a major reason why pain is so difficult to examine and treat. The lack of clear, objective measures, its multifactorial nature holding both complex cognitive and physical components, and the subjective nature of describing pain all make it extremely difficult for clinicians to deal with patient symptoms appropriately.

This is where inspiration from different research methodologies common within the humanities may enable new kinds of science to be conducted and why CLAs may offer new means of achieving new results in domains where research has stifled. Qualitative research methodology focuses on understanding human experience from the perspective of those who live them. The field of phenomenology, originally rooted in early 20th century work following the philosophy of Edmund Husserl, is a well-established approach that at its core focuses on exploring and describing people's lived experienced as reported from their own perspective and words. It primarily follows from conducting in-depth interviewers and observations to gather common themes and structures within an individual's lived experience. These data largely follow from self-report gathered by human interviewing. Characteristic in these investigations is the focus of collecting data in naturalistic settings where participants engage in contexts of their normal, everyday activities. Researchers are able to observe behaviors and interactions in their real-life contexts and environments as opposed to the highly constrained laboratory ones. Although conventional laboratory investigations yield greater control, they also require researchers to ignore dimensions to an individual's own experience that fall outside of preconceived notions of the experimenter. Phenomenological investigations hope to gather additional information that help structure and improve upon any preconceived notions that an experimenter may have or are simply limited to because of the particular environments and structure demanded from these investigations in typical laboratory settings.

So far, rule-based chatbots of the past have not been able to generate the depth of conversation necessary to leverage phenomenological approachs. These older chatbots quickly exhaust possible conversational flows. Most qualitative research investigations necessitate nuanced intuitions from humans conducting interviewers to understand what questions and conversation flows are needed to engage subjects such that they gather necessary and relevant information in a way that emulates the methodology a human would. Newer machine learning methodology has greatly change our ability to design CLAs that rival even human abilities; pre-trained language models, i.e., Large Language Models (LLMs), have enabled powerful text generation capabilities that continue to improve in terms of their human-like ability to hold conversations that accord with human conversational nuance and intuitions. These models are mainly based on large transformer architectures that rely on pre-training over massive amounts of text corpora generated by humans. They also rely heavily on further fine-tuning via preference alignment techniques like Reinforcement Learning with Human Feedback (RLHF).

CLAs are not only limited to interaction with text, however. For ConsonâncIA, we incorporated additional capabilities for the CLA to understand aspects of the subjects external environment by allowing them to send images to the CLA. This ability was made possible by Vision Language Models (VLMs), i.e., multimodal models that learn from both images and text. These models have shown promising zero-shot ability and generalize across most image domains. Additionally, subjects, if they chose so, could interact with the CLA via speaking to it. Speech audio was transcribed using the latest Speech-To-Text (STT) models.

<div class="mt-3">
    {% include figure.liquid loading="eager" path="assets/img/consonancia/agent.png" class="img-fluid rounded z-depth-1" zoomable=true %}
</div>
<div class="caption" style="text-align: left;">
Figure 2: the AI agent experience. Visitors first signed up to gain access to a CLA on their mobile devices using a popular messaging platform. A conversation language agent was deployed onto the messaging app with an official HTTP-based application programming interface (API). These bots work as small applications on top the messaging platform that can flexibly function to support a task or service. Interaction with the conversation agent could take place through both voice and images shared by the client. Voice understanding or Speech to the text (STT) transcription were integrated into the messaging app. Image understanding was performed with a visual-language model (VLM). The CLA initiated a conversation with users asking them about their experience at the exhibition leading to some questions about their own experience with hurt or suffering. Important in understanding and controlling CLA behavior is the role of prompt engineering.  System prompts provided the "instructions" that program the behavioral tendencies of language models. The prompts used for ConsonâncIA provide the initial framing, context, and objectives that guide how the model learns to understand and respond to inputs. The CLAs had a defined "gifting schedule" that would send their conversations through a pipeline to produce generative imagery from the information that was collected from users. The conversation agent employed a specific "gamificaiton" strategy to encourage users to continue the conversation.
</div>

Advancements in generative AI have not only greatly enhanced text generation capabilities, but have also paved the way for the development of generative image models, such as DALL-E or and Stable Diffusion. In this exploration, we created a novel form of conversational narrative. It harnessed the power of these generative models through enriching the conversation, integrating them seamlessly with generative images. The motivation for this was multifold and mainly sought to aid in capturing rich, descriptive experiences from individuals. Images possess the power to evoke strong emotional responses, adding a layer of complexity words alone cannot capture. Memories often surface when we encounter an image, as it can trigger a familiar scene, object, place, or experience, inviting us to navigate between spaces of recollection and imagination. These phenomena enhance the CLA cognitive mapping objectives. Furthermore, the inclusion of generative imagery engages the subject in a more profound interpretation and interaction with the conversation. By incorporating images into a conversational narrative, a certain depth and meaning can transcend words, blurring the boundaries between the past, present, and imagined states. These aspects together produced a narrative that enhanced the normal (and rather dull) conversational narratives individuals have on their mobile phones.

## Human-Human

> “No man is an island, entire of itself; every man is a piece of the continent, a part of the main.”
>
> - John Donne (1572–1631), Meditation #17 from Devotions upon Emergent Occasions

Current AI systems do not experience anything remotely like the feelings and inner states a human does. They provide, at best, an illusion of care, empathy and understanding. While it remains an interesting research question whether promoting such a naïve disillusionment could ultimately provide any good, we adopt an immediately cautious and more responsible view that the feelings of empathy and understanding are best found and promoted between real human interactions.

Our relationship to technology should actively promote this idea. Namely, that technological use should aid in finding empathy and understanding from one another. It is a rather uncontroversial statement to suggest this consitutes a collective good that technology should aim towards achieving. We have seen over the last decade significant challenges and consequences when this is not considered an objective. Many of these consequences have had profound effects on social cohesion, economic equality, shared cultural understanding, political stability, and individual well-being. For instance, social media platforms, driven by algorithms that prioritize engagement through optimizing advertising conversion rates, unintentionally encourage dysfunctional individual behavior and reinforce viewpoints that can lead to increased polarization, i.e., filter bubbles. Social media platforms and other services employing recommender systems are often said to be misaligned with their users and the collective good. This should strike us as unsurprising; these systems are built without any measure of what constitutes well-being, and moreover lack any mechanism for achieving any sort of collective good. They are reinforcement learning algorithms that rely on _individual_ engagement measures for their optimization.

This installation experience emphasizes a hypothesized means for humans to authentically connect with each other and achieve mutual understanding through shared experiences that can still be mediated by AI. The idea is that by leveraging AI to capture and map individual expressions of hurt, it can help bridge those experiences across people into ensembles where they feel most understood and supported. This allows humans to gain deeper empathy and consonance with one another's experiences, perspectives and values. Ultimately, the goal of "human-human alignment" in this context is to use AI as a facilitator to bring about better alignment between different humans. By allowing people to genuinely understand each other's feelings of vulnerabilities, it aims to foster interpersonal harmony, reduce conflicts stemming from misunderstandings, and cultivate a sense of unity among the human participants. AI system builders must acknowledge that interpersonal interactions profoundly shape our growth, emotional stability, and unique personality traits, serving as the cornerstone of human development and individuality. How we think and behave are shaped mainly by who we interact with.

<div class="mt-3">
    {% include figure.liquid loading="eager" path="assets/img/consonancia/cosine.png" class="img-fluid rounded z-depth-1" zoomable=true %}
</div>
<div class="caption" style="text-align: left;">
A: User conversations collected by the CLA were fed into an embedding model, a transformer-based encoder, to produce a vector that would be dynamically updated as the conversation progressed. This model generated dense vector representations from individual conversation text. B: Distance were computed to construct a social graph linking individuals between each other. Cosine similarity measure was used to determine how similar two vectors are by considering their angle $ \text{Cosine Similarity} = d_{cos}(C_i, C_j) := \frac{C_i \cdot C_j}{||C_i||_2 ||C_j||_2} $ where $C_i$ and $C_j$ denote conversations from users $i, j$. 
</div>

The main idea was to systematically map the physical space of ongoing conversations with CLAs into a relational social space with the goal of facilitating empathy between individuals. Mapping high-dimensional data like text is complex and handling it appropriately requires dimensionality reduction to understand relationships between entities. This is where techniques from modern machine learning can find similarity, i.e., compute distances, between each data observation. Each conversation is represented as a multi-dimensional space. Each vector points in a direction in this high-dimensional space based on its content. Using a robust similarity metric like cosine, distances between conversation can be computed and we can construct a social graph based on this information.

<div class="row mt-3">
    <div class="col-sm mt-3">
        {% include video.liquid path="assets/video/consonancia/group.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
</div>
<div class="caption">
Figure 3: An interactive amalgam of identities making up visitors at Metamersion. As participants shared more about themselves with the CLA, a visual representation making up what it understands of them dynamically adapts. These changes express ways the machine believes represents the participant’s experiences of hurt and how it relates to others around them. This changing video was projected on the outside of the room and featured the ability to interact with a particle system that was rendered on top the visuals via pose-tracking by a Microsoft Kinect device.
</div>

## Human-Self

> “So you think, do you, it is only houses that are built? I am continually building myself and building you, and you are doing the same, inversely.”
>
> ― Luigi Pirandello (1867 – 1936), One, No One, and One Hundred Thousand

In psychotherapy, therapists guide clients to explore their own cognitive maps, confront internal conflicts or dissonances, and work towards integrating different aspects of themselves into a more coherent and aligned sense of identity and meaning. This process often starts with an individual recognizing some internal conflict that is understood to be defined by two states in tension with one another: (1) the current dysfunctional one the individual is currently situated in, and (2) a (potentionally) idealized functional one free from dysfunctional thoughts or behavioral patterns. Therapy then tries to reconcile these two states by guiding the client through a process of acceptance, self-exploration, reflection, and gradual change to the desired better state. In essence, this constitutes an internal self-alignment. However, considering the presence of two or more internally conflicting states, Aligning AI with humans is significantly more complex than often assumed, due to the inherent lack of internal alignment within human individuals and collectives. Humans are complex with multiple internal goals, motivations, behavioral patterns, and preferences. Humans are often not internally coherent or manifest a single value system. To believe they are is a problematic oversimplication to alignment research.

<div class="mt-3">
    {% include figure.liquid loading="eager" path="assets/img/consonancia/self.png" class="img-fluid rounded z-depth-1" zoomable=true %}
</div>
<div class="caption">
Figure 4: Overview of the personalized audio-visual experience generation process. (A) User selection from a conversation graph, leading to text extraction and content creation. (B) Representation of the spatial audio experience, illustrating sound source positioning and user movement towards a selected sample in the room. (C) The ambiguous audio-visual experience motivated from earlier user interaction.
The process begins with selecting a user from a conversation graph (A), from which the user's conversation text is extracted. This text is then used to generate three components of the audio-visual experience: an introduction narrative giving instructions for the participant inside the room, spatial audio samples that was made up of positive or negative setiment statements motivated from the participant's conversation, and an audio-visual narrative constructed that accompanied the visuals. The spatial audio experience (B) demonstrates how sound sources are positioned in 3D space relative to the user's position and movement. The final audio-visual experience (C) is represented by an abstract circular image, that was played as an immersive, personalized narrative environment derived from the user's conversational data.
</div>

Here, we explored what an experience would look like if an AI could aid towards this type of self-alignment. This part of the installation's experience first began with the identification of a suitable individual from the social graph described in the earlier section. They received a text message with a request for them to accept an invitation to be present at the entrance of the room. From their earlier conversation between the CLA and user, a series of personalized narratives was produced that made up the important audio-visual components of the inner-room experience for this particular user.

The invited participant were given a pair of noise-cancelling headphones when they first entered the room greeted by a controller. As soon as they put on the pair of headphones, a personalized set of instructions were read aloud that described what would occur. Namely, that a spatial audio experience, synchronized with moving room lights and audio sources, would follow and at the end they would be asked to sit in a chair for a meditative audio-visual experience promoting an exercise of self-reflection. <d-footnote>Spatial audio in headphones aims to create a 3D sound experience that mimics how we perceive sound in the real world. This technology allows listeners to perceive sounds as if they're coming from specific locations in space, even as sound sources or the listener move.</d-footnote> An infarred camera mounted above performed human position tracking. These position coordinates in the room were fed into the spatial audio generation software components. A series of two audio samples were played simulatenously with one another in different spatial locations. Once participants arrived at the sample of their choice, another two audio samples were played in succession until the set was exhausted and they sat into a chair. Upon sitting in the chair, an audio-visual experience was projected onto a large, circular screen in the room where an artistic narrative played accompanied by visuals that were ambiguously motivated from their earlier conversation with the CLA, as well.

The two simultaneous audio samples represent different narrative paths or perspectives that the participant could choose between. This created an interactive, personalized experience that intended to represent different facets of the participant's earlier conversations with the CLA. The experience intended to facilitate self-reflection and exploration of internal dialogues within the user.

Although ambiguous, its objectives losely intended to elicit an uncovering of unconscious biases or preferences, challenge thinking patterns about a memory or experience reported, or encourage seeing different perspectives on a situation to reveal possible internal conflict or self-unalignment. Just as psychotherapy provides a structured space for type self-exploration under the guidance of a therapist, the AI-mediated experiences in ConsonâncIA room could serve as a catalyst for individuals to delve into these inner worlds, confront dissonances, and work towards increased self-alignment.

<div class="row mt-3">
    <div class="col-sm mt-3">
        {% include video.liquid path="assets/video/consonancia/personalized.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
</div>
<div class="caption">
A sample personalized audio-visual experience with real-time stable-diffusion rendering components.
</div>

## Conclusion

ConsonâncIA expands on traditional AI alignment objectives by incorporating human-human and human-self alignment goals into the mix. This holistic and interventionalist oriented approach is particularly relevant in the context of developing digital therapeutics, where the goal is to improve overall well-being of individual and groups. The three elements of agent, human, and self alignment in ConsonâncIA form the three distinct experiences that were described.

Consonancia was, to our knowledge, the first demonstration of how an private individual participation could collectively mediate the construction of a shared representation between individuals inhabiting the same physical space and provide a space from which we can imagine how a healing experience might be mediated by intelligent machines. These experiences might form the basis of developing next-generation digital therapuetics that go beyond current approaches that are usually isolated to serving apps on mobile phones. Much future work will be needed to determine how these kinds of experiences can be shaped towards this end.

## Credits

ConsonâncIA would not have been possible without the significant contributions of a team. Filipe Mendes - lead design, Lydia Neto - room design and construction, Cláudia Ribeiro - Unity design. Nico Espinoza - MSP/Max spatial audio sound design, Rui Rodrigues - audio-visual experience sound design.
