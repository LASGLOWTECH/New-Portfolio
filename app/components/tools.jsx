


import { MdDomain } from "react-icons/md";
import { SiBisecthosting } from "react-icons/si";
import { BsVectorPen, BsCodeSlash } from "react-icons/bs";
import { TbActivity } from "react-icons/tb";
import { SlVector } from "react-icons/sl";

const Profile = [
  {
    id: "1",
    title: "Web Design",
    icon: { iconTitle: BsVectorPen},

    info: "I specialize in creating intuitive and aesthetically pleasing websites that not only look great but also offer seamless user experiences. By incorporating modern design principles, user interface best practices, and responsive design techniques, I help you establish a strong online presence and leave a lasting impression on your visitors."
  },

  {
    id: "2",
    title: "Web Development",
    icon: { iconTitle: BsCodeSlash },
    info: " I bring your design concepts to life by building functional and feature-rich websites that are optimized for performance and scalability. Whether it's a simple brochure site or a complex e-commerce platform, I have the technical expertise to develop custom solutions that meet your specific requirements and business objectives.",

  },

  {
    id: "3",
    title: "Graphic Designing",
    icon: { iconTitle: SlVector },
    info: "I leverage my creativity and expertise to craft visually captivating assets that communicate your brand message effectively. From logos and branding materials to promotional graphics and print designs, I ensure that every visual element aligns with your brand identity and resonates with your target audience. "
  },

  {
    id: "4",
    title: "SEO (Search Engine Optimization)",
    icon: { iconTitle: TbActivity },
    info: " I offer SEO services to improve your website's visibility and rankings on search engine results pages (SERPs). Through strategic keyword research, on-page optimization, content creation, and link building, I help drive organic traffic to your site, increase brand visibility, and generate valuable leads and conversions."
  },

  {
    id: "5",
    title: "Domain Registration",
    icon: { iconTitle:  MdDomain },
    info: "Securing the right domain name is crucial for establishing your online identity and brand recognition. I assist you in selecting and registering the perfect domain name that aligns with your brand and is memorable for your audience. Whether it's a new domain registration or transferring an existing one, I handle the entire process efficiently, ensuring that your domain is properly configured and managed."
  },
  {
    id: "6",
    title: "Web Hosting",
    icon: { iconTitle:  SiBisecthosting },
    info: "Reliable web hosting is essential for ensuring optimal performance, security, and uptime for your website. I offer a range of hosting solutions tailored to your specific requirements, whether you're running a small business website, an e-commerce store, or a high-traffic platform. From shared hosting and virtual private servers (VPS) to dedicated hosting options, I provide scalable and cost-effective hosting solutions that meet your needs and support your online growth."
  }
]

export default Profile;