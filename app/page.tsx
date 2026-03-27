import { GitBranchIcon, ExternalLinkIcon, MailIcon, MapPinIcon, PhoneIcon, BriefcaseIcon, BookIcon, Code2Icon, UsersIcon } from "lucide-react";
import Navbar from "../components/Navbar";

const profile = {
  name: "Ho Viet Thang",
  role: "Frontend Developer Fresher",
  summary:
    "Sinh viên năm cuối ngành Công nghệ Thông tin, chuyên sâu về phát triển giao diện web. Đang tìm cơ hội thực tập/việc làm đầu tiên.",
  location: "56/3 Ap 4, Hoc Mon, TP. Ho Chi Minh",
  phone: "0862846967",
  email: "hovietthang190704@gmail.com",
  github: "https://github.com/HoVietThang190704",
  linkedin: "https://www.linkedin.com",
};

const technicalSkills = ["React", "Next.js", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Shadcn UI", "REST API"];
const softSkills = ["Tinh thần học hỏi", "Giao tiếp nhóm", "Giải quyết vấn đề"];

const education = [
  {
    school: "Đại học Bách Khoa TP. HCM",
    major: "Công nghệ thông tin - Software Engineering",
    gpa: "3.29 / 4.0",
    gradYear: "2026",
    details: ["Tham gia dự án nhóm, học tập các môn chuyên sâu", "Đang tìm cơ hội thực tập frontend"]
  }
];

const projects = [
  {
    title: "Movie Streaming Application",
    description:
      "Giao diện streaming video responsive với tính năng tìm kiếm, phát trực tuyến, và xác thực JWT.",
    tags: ["React", "Next.js", "JWT", "hls.js"],
    link: "https://github.com/HoVietThang190704/fe-movie"
  },
  {
    title: "Fresh Food Platform",
    description:
      "Nền tảng thương mại điện tử thực phẩm sạch; tích hợp Elasticsearch, chat realtime Socket.io, JWT/OAuth.",
    tags: ["Next.js", "Node.js", "MongoDB", "Socket.io"],
    link: "https://github.com/HoVietThang190704/fe-dacn-v1"
  },
  {
    title: "HDBank Hackathon 2025",
    description: "Tham gia hackathon triển khai giải pháp công nghệ & pitching demo sản phẩm.",
    tags: ["Hackathon", "Teamwork", "Rapid Prototype"],
    link: "https://github.com/HoVietThang190704"
  },
  {
    title: "Portfolio Website Template",
    description: "Xây dựng trang cá nhân Next.js responsive, hiện đại, dễ chỉnh sửa.",
    tags: ["Next.js", "Tailwind", "Responsive", "Accessible"],
    link: "https://github.com/HoVietThang190704"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 via-white to-slate-200 text-slate-800">
      <Navbar />

      <main className="mx-auto mt-20 max-w-6xl p-4 md:p-6 lg:p-8">
        <section id="hero" className="animate__animated animate__fadeInDown rounded-2xl bg-white/80 p-6 shadow-lg ring-1 ring-slate-200 sm:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-sky-700">Web Portfolio</p>
              <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">{profile.name}</h1>
              <p className="mt-2 text-lg font-medium text-slate-700">{profile.role}</p>
              <p className="mt-4 max-w-2xl text-slate-600">{profile.summary}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#contact" className="rounded-xl bg-sky-600 px-6 py-2 text-sm font-semibold text-white transition hover:bg-sky-700">
                  Liên hệ ngay
                </a>
                <a href="#projects" className="rounded-xl border border-sky-600 px-6 py-2 text-sm font-semibold text-sky-700 transition hover:bg-sky-50">
                  Xem dự án
                </a>
              </div>
            </div>
            <div className="order-first mx-auto h-40 w-40 rounded-full border-4 border-sky-200 bg-gradient-to-br from-sky-100 to-slate-100 lg:order-last lg:h-48 lg:w-48" />
          </div>
        </section>

        <section id="about" className="animate__animated animate__fadeInUp mt-10 rounded-2xl bg-white/80 p-6 shadow-lg ring-1 ring-slate-200 sm:p-10">
          <h2 className="text-xl font-bold text-slate-900">About</h2>
          <p className="mt-4 text-slate-600">
            Mình là sinh viên năm 4 ngành CNTT, giàu động lực học hỏi và đam mê xây dựng UI mượt mà, thân thiện với người dùng.
            Mong muốn bắt đầu sự nghiệp thực tập/việc làm frontend trong môi trường chuyên nghiệp.
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <div className="flex items-start gap-2 rounded-xl border border-slate-200 bg-slate-50 p-3">
              <MapPinIcon size={18} className="text-sky-600" />
              <div>
                <p className="font-semibold">Địa điểm</p>
                <p>{profile.location}</p>
              </div>
            </div>
            <div className="flex items-start gap-2 rounded-xl border border-slate-200 bg-slate-50 p-3">
              <PhoneIcon size={18} className="text-sky-600" />
              <div>
                <p className="font-semibold">Điện thoại</p>
                <p>{profile.phone}</p>
              </div>
            </div>
            <div className="flex items-start gap-2 rounded-xl border border-slate-200 bg-slate-50 p-3">
              <MailIcon size={18} className="text-sky-600" />
              <div>
                <p className="font-semibold">Email</p>
                <p>{profile.email}</p>
              </div>
            </div>
            <div className="flex items-start gap-2 rounded-xl border border-slate-200 bg-slate-50 p-3">
              <GitBranchIcon size={18} className="text-sky-600" />
              <div>
                <p className="font-semibold">GitHub</p>
                <a href={profile.github} className="text-sky-700 hover:underline" target="_blank" rel="noreferrer">
                  github.com/HoVietThang190704
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="animate__animated animate__fadeInUp mt-10 rounded-2xl bg-white/80 p-6 shadow-lg ring-1 ring-slate-200 sm:p-10">
          <h2 className="text-xl font-bold text-slate-900">Skills</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <div className="mb-3 inline-flex items-center gap-2 text-sky-700">
                <Code2Icon size={18} />
                <p className="font-semibold">Technical Skills</p>
              </div>
              <ul className="grid grid-cols-2 gap-2 text-sm text-slate-700">
                {technicalSkills.map((skill) => (
                  <li key={skill} className="inline-flex items-center gap-2 rounded-lg bg-white/80 px-2 py-1 font-medium text-slate-600 shadow-sm transition hover:-translate-y-0.5 hover:bg-sky-50">
                    <span className="text-sky-500">•</span> {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <div className="mb-3 inline-flex items-center gap-2 text-sky-700">
                <UsersIcon size={18} />
                <p className="font-semibold">Soft Skills</p>
              </div>
              <ul className="grid gap-2 text-sm text-slate-700">
                {softSkills.map((skill) => (
                  <li key={skill} className="inline-flex items-center gap-2 rounded-lg bg-white/80 px-3 py-2 font-medium text-slate-600 shadow-sm transition hover:-translate-y-0.5 hover:bg-sky-50">
                    ✓ {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="education" className="animate__animated animate__fadeInUp mt-10 rounded-2xl bg-white/80 p-6 shadow-lg ring-1 ring-slate-200 sm:p-10">
          <h2 className="text-xl font-bold text-slate-900">Education & Experience</h2>
          <div className="mt-5 grid gap-4">
            {education.map((item) => (
              <article key={item.school} className="rounded-xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
                <div className="flex items-center gap-2 text-sky-700">
                  <BookIcon size={16} />
                  <h3 className="text-lg font-semibold">{item.school}</h3>
                </div>
                <p className="mt-1 text-sm text-slate-600">{item.major} · GPA {item.gpa} · Expected {item.gradYear}</p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
                  {item.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="animate__animated animate__fadeInUp mt-10 rounded-2xl bg-white/80 p-6 shadow-lg ring-1 ring-slate-200 sm:p-10">
          <h2 className="text-xl font-bold text-slate-900">Projects</h2>
          <div className="mt-5 grid gap-4 lg:grid-cols-2">
            {projects.map((project) => (
              <article key={project.title} className="group rounded-xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-1 hover:shadow-lg">
                <div className="flex items-center gap-2 text-sky-700">
                  <BriefcaseIcon size={16} />
                  <h3 className="text-lg font-semibold group-hover:text-sky-600">{project.title}</h3>
                </div>
                <p className="mt-2 text-sm text-slate-700">{project.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-sky-100 px-2 py-1 text-xs font-medium text-sky-700">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-lg border border-sky-200 px-3 py-1 text-xs font-semibold text-sky-700 transition hover:bg-sky-200"
                >
                  Xem chi tiết
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="animate__animated animate__fadeInUp mt-10 rounded-2xl bg-white/80 p-6 shadow-lg ring-1 ring-slate-200 sm:p-10">
          <h2 className="text-xl font-bold text-slate-900">Contact</h2>
          <div className="mt-4 grid gap-6 lg:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="font-semibold text-slate-700">Thông tin liên hệ</p>
              <p className="mt-3 text-sm text-slate-700">{profile.location}</p>
              <p className="mt-1 text-sm text-slate-700">{profile.phone}</p>
              <p className="mt-1 text-sm text-slate-700">{profile.email}</p>
              <div className="mt-3 flex items-center gap-2 text-slate-700">
                <GitBranchIcon size={18} />
                <a href={profile.github} target="_blank" rel="noreferrer" className="underline hover:text-sky-700">
                  github.com/HoVietThang190704
                </a>
              </div>
              <div className="mt-2 flex items-center gap-2 text-slate-700">
                <ExternalLinkIcon size={18} />
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="underline hover:text-sky-700">
                  LinkedIn
                </a>
              </div>
            </div>
            <form action="#" className="space-y-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
              <fieldset className="rounded-lg bg-white p-3 shadow-sm">
                <label className="mb-1 block text-xs font-semibold text-slate-600">Họ tên</label>
                <input name="name" placeholder="Tên bạn" className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-sky-500" />
              </fieldset>
              <fieldset className="rounded-lg bg-white p-3 shadow-sm">
                <label className="mb-1 block text-xs font-semibold text-slate-600">Email</label>
                <input type="email" name="email" placeholder="Email của bạn" className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-sky-500" />
              </fieldset>
              <fieldset className="rounded-lg bg-white p-3 shadow-sm">
                <label className="mb-1 block text-xs font-semibold text-slate-600">Tin nhắn</label>
                <textarea name="message" rows={4} placeholder="Nội dung" className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-sky-500" />
              </fieldset>
              <button type="submit" className="w-full rounded-lg bg-sky-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-700">
                Gửi tin nhắn
              </button>
            </form>
          </div>
        </section>

        <footer className="animate__animated animate__fadeInUp mt-10 rounded-2xl bg-white/80 p-4 text-center text-xs text-slate-500 shadow-inner">
          <p>
            © {new Date().getFullYear()} {profile.name} · Designed for internship/career launch · Built with Next.js + Tailwind CSS
          </p>
        </footer>
      </main>
    </div>
  );
}
