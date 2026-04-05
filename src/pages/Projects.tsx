import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Projects() {
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPreviewImage(null);
    };
    if (previewImage) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [previewImage]);

  return (
    <>
      <section>
        <h2 className="uppercase text-[18px] tracking-wider text-[#888] font-normal mb-5 hidden md:block">
          Recent Projects
        </h2>
        <h3 className="text-[20px] text-[#c0c0c0] mt-0 mb-[30px] pb-[15px] border-b border-[#333] font-medium tracking-[0.5px]">
          Technology
        </h3>

        <article className="flex flex-col md:flex-row gap-[30px] mb-[50px] pb-[50px] border-b border-[#282828] last:border-none last:mb-0 last:pb-0">
          <div className="shrink-0">
            <img
              src="/img/CCI/aac.png"
              alt="Cognitive Communication Interface"
              className="w-full md:w-[200px] h-auto md:h-[125px] object-cover rounded bg-[#282828] transition-transform duration-300 cursor-pointer"
              onClick={() => setPreviewImage("/img/CCI/aac.png")}
            />
          </div>
          <div>
            <h3 className="m-0 mb-[10px] text-[20px] font-medium text-[#e0e0e0]">
              Cognitive Communication Interface (ongoing)
            </h3>
            <p className="text-[#b0b0b0] m-0 mb-[15px] text-[15px]">
              This project develops tools to adapt pretrained language models as communication aids for patients with
              conditions like ALS, aphasia, or dysarthria. Using eye-tracking and egocentric video, systems infer users'
              intentions to support effective interaction. Central to this work is "cognitive steering" - guiding AI
              personas equipped with personalized context to communicate on behalf of the user. We focus on
              representation engineering to shape and interpret AI behaviors, aligning neural activations with human
              thought processes to bridge human cognition and machine intelligence.
            </p>
            <a
              href="https://bialign-workshop.github.io/2026chi-pdfs/21.pdf"
              className="text-[#a0a0a0] underline decoration-[#555] hover:text-white hover:decoration-white transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lacosse, et al., Multi-System Cognitive Steering for Generative Communication.
            </a>
          </div>
        </article>

        <article className="flex flex-col md:flex-row gap-[30px] mb-[50px] pb-[50px] border-b border-[#282828] last:border-none last:mb-0 last:pb-0">
          <div className="shrink-0">
            <img
              src="/img/palimpsest/1.png"
              alt="Palimpsest"
              className="w-full md:w-[200px] h-auto md:h-[125px] object-cover rounded bg-[#282828] transition-transform duration-300 cursor-pointer"
              onClick={() => setPreviewImage("/img/palimpsest/1.png")}
            />
          </div>
          <div>
            <h3 className="m-0 mb-[10px] text-[20px] font-medium text-[#e0e0e0]">Palimpsest (2024)</h3>
            <p className="text-[#b0b0b0] m-0 mb-[15px] text-[15px]">
              This installation presents a dialogue between participants and a synthetic intelligence. The interaction
              is mediated through image exchange, aiming to investigate the AI's capacity for understanding and
              responding to user needs, desires, and well-being, as well as its potential to augment human creativity.
              The system utilizes recent advancements in generative models for image synthesis and language
              understanding.
            </p>
            <a
              href="https://youtu.be/aGPPA5kwjrI"
              className="text-[#a0a0a0] underline decoration-[#555] hover:text-white hover:decoration-white transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Example Video ▸
            </a>
          </div>
        </article>

        <article className="flex flex-col md:flex-row gap-[30px] mb-[50px] pb-[50px] border-b border-[#282828] last:border-none last:mb-0 last:pb-0">
          <div className="shrink-0">
            <img
              src="/img/consonancia/consonancia.png"
              alt="ConsonâncIA"
              className="w-full md:w-[200px] h-auto md:h-[125px] object-cover rounded bg-[#282828] transition-transform duration-300 cursor-pointer"
              onClick={() => setPreviewImage("/img/consonancia/consonancia.png")}
            />
          </div>
          <div>
            <h3 className="m-0 mb-[10px] text-[20px] font-medium text-[#e0e0e0]">ConsonâncIA (2024)</h3>
            <p className="text-[#b0b0b0] m-0 mb-[15px] text-[15px]">
              An immersive audiovisual work exploring the future of digital therapeutics and showcases how AI can
              facilitate healing experiences by mediating human-to-human and human-to-self connections, extending
              traditional AI alignment concepts. The project also delves into using conversational AI and generative
              models to understand and map individual human experiences, aiming to foster empathy and promote
              self-reflection for improved well-being.
            </p>
            <a
              href="https://elacosse.substack.com/p/consonancia"
              className="text-[#a0a0a0] underline decoration-[#555] hover:text-white hover:decoration-white transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read Project Overview ▸
            </a>
          </div>
        </article>

        <article className="flex flex-col md:flex-row gap-[30px] mb-[50px] pb-[50px] border-b border-[#282828] last:border-none last:mb-0 last:pb-0">
          <div className="shrink-0">
            <img
              src="/img/ls1/1.jpg"
              alt="Latent Space I"
              className="w-full md:w-[200px] h-auto md:h-[125px] object-cover rounded bg-[#282828] transition-transform duration-300 cursor-pointer"
              onClick={() => setPreviewImage("/img/ls1/1.jpg")}
            />
          </div>
          <div>
            <h3 className="m-0 mb-[10px] text-[20px] font-medium text-[#e0e0e0]">Latent Space I (2023)</h3>
            <p className="text-[#b0b0b0] m-0 mb-[15px] text-[15px]">
              An art installation, Latent Space 1, used an AI simulating Alan Watts to understand visitors' dreams and
              aspirations. This data was then transformed into a personalized virtual reality experience with dream-like
              visuals, poetic narration, and unique music. (w/ Mainen Lab and Mots)
            </p>
            <a
              href="https://youtu.be/Fa3UvuxguCY"
              className="text-[#a0a0a0] underline decoration-[#555] hover:text-white hover:decoration-white transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Example Video ▸
            </a>
          </div>
        </article>
      </section>

      <section>
        <h3 className="text-[20px] text-[#c0c0c0] mt-0 mb-[30px] pb-[15px] border-b border-[#333] font-medium tracking-[0.5px]">
          Academic
        </h3>

        <article className="flex flex-col md:flex-row gap-[30px] mb-[50px] pb-[50px] border-b border-[#282828] last:border-none last:mb-0 last:pb-0">
          <div className="shrink-0">
            <img
              src="/img/cmi/traj_latent_space.png"
              alt="Cognitive Mechanistic Interpretability"
              className="w-full md:w-[200px] h-auto md:h-[125px] object-cover rounded bg-[#282828] transition-transform duration-300 cursor-pointer"
              onClick={() => setPreviewImage("/img/cmi/traj_latent_space.png")}
            />
          </div>
          <div>
            <h3 className="m-0 mb-[10px] text-[20px] font-medium text-[#e0e0e0]">
              Cognitive Mechanistic Interpretability (ongoing)
            </h3>
            <p className="text-[#b0b0b0] m-0 mb-[15px] text-[15px]">
              Using mechanistic interpretability techniques, we explore how distinct cognitive behavior are identifiable
              and separable within the models' internals. This suggests that LLMs can be used as scientific models to
              better understand human cognition and, excitingly, opens the door to novel "cognitive alignment," where
              models could be intentionally steered to either "think" more like humans for better collaboration or be
              productively disaligned to foster novel creativity.
            </p>
            <a
              href="https://arxiv.org/pdf/2603.01822"
              className="text-[#a0a0a0] underline decoration-[#555] hover:text-white hover:decoration-white transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lacosse, et al., Emerging Human-like Strategies for Semantic Memory Foraging in Large Language Models,
              NeurIPS 2025 workshop for Mechanistic Interpretability.
            </a>
          </div>
        </article>

        <article className="flex flex-col md:flex-row gap-[30px] mb-[50px] pb-[50px] border-b border-[#282828] last:border-none last:mb-0 last:pb-0">
          <div className="shrink-0">
            <img
              src="/img/cogsyn/figure1.png"
              alt="Cognitive Synergies"
              className="w-full md:w-[200px] h-auto md:h-[125px] object-cover rounded bg-[#282828] transition-transform duration-300 cursor-pointer"
              onClick={() => setPreviewImage("/img/cogsyn/figure1.png")}
            />
          </div>
          <div>
            <h3 className="m-0 mb-[10px] text-[20px] font-medium text-[#e0e0e0]">Cognitive Synergies (ongoing)</h3>
            <p className="text-[#b0b0b0] m-0 mb-[15px] text-[15px]">
              AI should be engineered not to replace core human cognitive functions, but to enhance them by serving as
              cognitively-aware "thought partners" that can align with human mental processes, amplifying their
              abilities for creative exploration. Here, we explore how AI during a collaborative active memory search
              task can track and enhance human performance. (w/ Mariana Duarte, Peter Todd, and Daniel McNamee).
            </p>
          </div>
        </article>
      </section>

      <AnimatePresence>
        {previewImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex justify-center items-center z-[1000] p-4 md:p-0"
            onClick={() => setPreviewImage(null)}
          >
            <button
              className="absolute top-[10px] right-[10px] md:top-[20px] md:right-[20px] text-white text-[30px] cursor-pointer bg-transparent border-none p-[5px] px-[10px]"
              onClick={() => setPreviewImage(null)}
            >
              &times;
            </button>
            <img
              src={previewImage}
              alt="Preview"
              className="max-w-[95%] md:max-w-[80%] max-h-[70%] md:max-h-[80%] object-contain rounded shadow-[0_5px_15px_rgba(0,0,0,0.5)]"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
