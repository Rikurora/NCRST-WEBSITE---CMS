import React from "react";
import { Star } from "lucide-react";
import pexel4 from "../assets/pexels4.jpg";

const Innovation: React.FC = () => {
  const innovators = [
    {
      name: "Victoria Haihambo",
      company: "Agelvipa Online",
      sector: "E-commerce and Digital empowerment",
      innovation:
        "Multi-vendor e-commerce platform connecting local businesses to markets, with a focus on empowering women through the Women E-hub initiative ",
      impact:
        "Developed a mobile app & website, expanded to an Author Hub for African writers, increased social media presence, and secured seed funding from Impacther Africa",
      funding: "BOOST-UP programme",
      image:
        "https://external.fers4-1.fna.fbcdn.net/emg1/v/t13/4227578532416473?url=https%3A%2F%2Fnamibiatoday.com%2Fwp-content%2Fuploads%2F2025%2F01%2FVictoria-Haihambi.png&fb_obo=1&utld=namibiatoday.com&stp=c0.5000x0.5000f_dst-jpg_flffffff_p500x261_q75_tt6&_nc_gid=Qw7fklvl8Hk4yQg8XSpm1w&_nc_oc=AdkjrC1AMA3_XmwRADX0T6Xo_9nq71BvjcIDTodrj2qZoWwgg7rmpVWm-p33GDgavbo&ccb=13-1&oh=06_Q3-0Aej4-mIGHEqqLh_2rsvIQlIh1JNZwq24VlFe8oBUroDA&oe=685EE9AC&_nc_sid=c97757",
    },
    {
      name: "Sara Iyaloo S. Ekondo",
      company: "Awana Food Trading Enterprise CC",
      sector: "Agri-Processing & Food Waste Reduction",
      innovation:
        "Value-added food products (hibiscus syrup, lemonade concentrates, sauces) from excess/b-grade produce to combat food waste",
      impact:
        "Reduced farm-level food spoilage, created jobs, and built a small-holder farmer database for sustainable sourcing",
      funding: "NICW programme",
      image:
        "https://scontent.fers4-1.fna.fbcdn.net/v/t39.30808-6/481176930_647080284525501_5494073247083489745_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ccKrlaDeBIoQ7kNvwF1sU1-&_nc_oc=AdmMXurbFCi2DE7UOx5Jp470bjqSBqE_oDL4lSjsgfhg9qdkgVbQ1XDF4vhcTAcCZBY&_nc_zt=23&_nc_ht=scontent.fers4-1.fna&_nc_gid=4Pps6uV_ihaeDLzMdfPB3Q&oh=00_AfPHHgleXL2TGUU5sYkphO7a5rOt6WTLgMU6LTV3OIdnhg&oe=6862C635",
    },
    {
      name: "Verna Nghuumono",
      company: "Laverne Pads Manufacturing CC",
      sector: "Menstrual Health & Sustainable Hygiene",
      innovation:
        "Affordable, reusable sanitary pads to combat period poverty and reduce school dropouts",
      impact:
        "Reducing period poverty in Namibia, decreasing school absenteeism, and providing eco-friendly menstrual solutions",
      funding: "NICW programme",
      image: "https://lasanitarym.com/img/blog3.jpg",
    },
    {
      name: "Vaughan Weiss",
      company: "Wision Media and Drafting",
      sector: "Visual Communication & Immersive Technology",
      innovation:
        "3D rendering, animation and VR solutions to transform complex ideas into clear visual communications",
      impact:
        "Enhancing brand awareness, investor attraction and customer acquisition through cutting-edge visual storytelling",
      funding: "BOOST-UP programme",
      image:
        "https://scontent.fers4-1.fna.fbcdn.net/v/t39.30808-6/480271760_1570729174329722_1139182505980930790_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=0AZiO1N6GmoQ7kNvwFEsBbK&_nc_oc=AdmSciKdTQxcET2WnO32yqDueY3_73Zp3ALrVty54vIReoyGxQqYI8rirSMQyZ_j6pc&_nc_zt=23&_nc_ht=scontent.fers4-1.fna&_nc_gid=92xodVC0XEhCZfZ7kcvPZw&oh=00_AfMCQxm0VzpMmejwHwOTszkHiVbXRj01Sg2bnyTlfLRtkg&oe=6862B9FD",
    },
    {
      name: "Haita Ester",
      company: "Nzimbu Investment CC",
      sector: "Organic Food Production & Health",
      innovation:
        "Pure organic juices, jams, tea, and oil made from indigenous Namibian ingredients (Nongongo fruits, Mutete vegetables)",
      impact:
        "Promoting health through local organic products while preserving traditional food knowledge",
      funding: "NICW programme",
      image:
        "https://scontent.fers4-1.fna.fbcdn.net/v/t39.30808-6/489952016_1176531004259108_8979381946798009155_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=M3IjyihTnS4Q7kNvwGl4lBu&_nc_oc=AdnXJMzJrt8ica6mDmZktaoOSUd6-wJnDMBcIvrWK6O_APgdB0xAaXLN7Uf3kJmldTo&_nc_zt=23&_nc_ht=scontent.fers4-1.fna&_nc_gid=wGi3s3oJJUX2wnSLakdxAw&oh=00_AfOjp5Iame6cLvNe0mwEBOs7RfgbuSUOWxS3eW0p8JqH3w&oe=6862C8B5",
    },
    {
      name: "Dankie Nendongo",
      company: "Leo Canopus Inc",
      sector: "Digital Infrastructure & Connectivity Solutions",
      innovation:
        "Free community Wi-Fi solutions revolutionizing internet access deployment in underserved areas",
      impact:
        "Closing Africa's digital divide - targeting the 40% of continent without internet access",
      funding: "BOOST-UP programme",
      image:
        "https://media.licdn.com/dms/image/v2/D4D03AQEzzduqzP_8Qg/profile-displayphoto-shrink_800_800/B4DZdfFZyZHkAc-/0/1749646942062?e=1756339200&v=beta&t=5QOF8IzFtTKhdEhUG-QBJr5pmKnT0THenNLmUNkHHlI",
    },
    {
      name: "Jesse Liula Schiceya",
      company: "Patient Care",
      sector: "Healthcare Technology",
      innovation: "Telemedicine and healthcare insurance platform",
      impact: "Provides accessible healthcare services and insurance",
      funding: "BOOST-UP programme",
      image:
        "https://media.licdn.com/dms/image/v2/D4D03AQEDfYQCcVls3A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1720142406873?e=1755129600&v=beta&t=fou3taCeIsGvab1Tz8nvbWeK7WlDliWSe4G7NU6altk",
    },
    {
      name: "Stacey Likando",
      company: "THANK-YOU WALLET",
      sector: "Technology",
      innovation: "Community empowerment through direct payments",
      impact: "Enables seamless payments to stores and service stations",
      funding: "BOOST-UP programme",
      image:
        "https://media.licdn.com/dms/image/v2/D4D03AQGyhgO8wR_UNA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1727729509754?e=1756339200&v=beta&t=7Qbc5rDlExzBJcAq8XXNqhGgUplG3iMIfrqvDYN6AX8",
    },
    {
      name: "Roswitha Matheus",
      company: "Green kitchen's Tech",
      sector: "Clean Energy",
      innovation: "Manufacturing clean cook stoves",
      impact: "Provides clean cooking solutions and promotes green energy",
      funding: "NICW programme",
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEX////LycbIxsPo5+bMysfs6+r7+/vRz83f3tzX1dPi4d/b2tjw7+7z8vLZ2NXv7+4G0JKeAAAEoElEQVR4nO2d25qrIAxGK4qIp77/2+5ae7JTD0hMgvtfV3MxF6wPCBAJvVwAAAAAAAAAAAAAAAAAAADA2Sg7W1e9975v6vxaSjeHmNI2hRnIBsa/fN5JN4uKMncPtSnGFNUZJDv/U+8p6ax0AyPp3LzeQ7LIpRsZQenX/EbHq3RD91Jv8bs7+iRDa7k6QD8dW+nmhmMD/AbFSrrBoVRhgjdFJ93kMPpQwSHgpDQZN8XQv6SjuFMwS6YXm52CN0Xppm8j3y14WxilG7+Fbr9gIotGhF+WxNK/Y52YIi2wxjVW0DTSCitE+g2Kuk/Fm48TC+jevhEIZkbzcZGiC3V3IoWf6pkYeCacpZcWmcXRCGZGWmSOkqgLM6M1xRix5f5C6wbcUwmqHaZkglqXxKhj05dhLS3zE7ppqHUiBicQF9CZzqALNFpDTUFpqDLrRjhIlW5NSQ1VpmtIDTXu28h2pWoNz9+HmIdhhipj6fnXw/PvaSj3pTpz++c/W5z/fEgYTHUuFv9Dnub8uTa6fKna64pkOW+V6/0A1TDVOkgvVNFUayQdoNnW6Ey0jZDEGp1nwycUnaj5E/CFYiYq/WbxIj6cKg6kI7Frot618ElksNEdZkai7n2pv/N1JyaeKo+jT/Zegs7SuekdUkvyif4o82Kfos4k6Qy7FNPpwYHgq8JpFZQMBF5TTOOW/pQuC6ldU5u3WGRzZYlxqY3QJ+s1sne/RDtwxBardcBa89ubsb9L1Z9+Rep+A12VzdTjm15xzimMrvbvJxVGOeMq5Yf5YDpbN94N+Ka2KW3QAAAAAAAAAAAAcF661uah2LZLIy/c1n58yHMPmausas0y92YpO7qBIQlXa5Vsl97xDLN0GvP8du+n7RlJbbnwltRvdNTUj9veKQ121POuKWUpydRRyf2hQzrwoVgoyP6Xq18I4xzF77lFv162qigcVNujBaUfGmQQlFUkrFZbVBQbqKT16YuKUuGGsvB3RVFm0ThwHfyLhOBhO5lfGIEn3Ngm4UORf49KWZu+CW5BlpXwE/Ylg6qYMkCRN7dx+Hb0hyHv1oa/C5kLvJm2a1+GnGmNRkCQt7ZUogtZ924CceZuyBdrZAYp5zAVEuRbEpm3pB+GXOdEqiefww25JiLNu+R74CrAZD9WvGEy5MtefMMVasQE2dZ8sWnIZSi2WLC96yJpyJOtgWH6hpKxlGm1kEhhPAx5BAV3bVwF3yJZmgG+TI3UMOXLtgkdnzgzpjKdyJkwFVkSeb8EC4xT7gsLrN9H74Ls30iZFSWuuLGuijJXMYN+WjwSqQt8pG+UzyP5uAtLSJW9u3f8SJW/YnpwTNXwE8jHXPJ++Il34IgNefMqxE/69uwHNVEtyVSw11Q7U+7/xfg5P69jgL4po3+Qe+Ln1NRafHBzJJI0Tuv7UWVF4GhMr218TsgXHy/b4Feorc17MTxetr/7tA7PL9rm9wttK3pevD4mhK5yAeWkxhRNIr33SWm3WN7+o+hz9XNvlrLLG5dN3tt7mw01v319TdfuTdnZvGq8K8Yq76xwvq9qewo3AAAAAAAAAAAAAAAAAAAA8OIfvUM8YTLc6kkAAAAASUVORK5CYII=",
    },
    {
      name: "Akuumba Andrias",
      company: "Kaskola",
      sector: "Digital Marketing",
      innovation: "Digitalization of the Namibian Nomad Visa",
      impact: "Helps market and digitalize visa processes",
      funding: "BOOST-UP programme",
      image: "/Andrias.jpeg",
    },
    {
      name: "Wilbard Lazarus",
      company: "Okaluli (by Ausgezeichnet Technische)",
      sector: "Education Technology",
      innovation: "Empowering students in Sub-Saharan Africa",
      impact: "Provides accessible education solutions",
      funding: "BOOST-UP programme",
      image: "/lazarus.jpeg",
    },
    {
      name: "Andreas Elifas",
      company: "Jumper Namibia",
      sector: "Creative Agency",
      innovation: "Innovative design, VR experiences, and visual communication",
      impact: "Delivers impactful creative solutions",
      funding: "BOOST-UP programme",
      image: "/elifas.jpeg",
    },
    {
      name: "Cecilia Naule",
      company: "Rural Power Solutions CC",
      sector: "Renewable Energy",
      innovation: "Solar cooking energy solutions",
      impact: "Provides energy access to people with limited electricity",
      funding: "NICW programme",
      image: "/cecilia.jpeg",
    },
    {
      name: "Diana Nakwenye-Nakuumba",
      company: "DN-NAK Investment CC",
      sector: "Food Processing",
      innovation: "Nutritional food products (e.g., jam, juice, chutney)",
      impact: "Adds value to local produce and promotes healthy eating",
      funding: "NICW programme",
      image: "/diana.jpeg",
    },
    {
      name: "Loide Dawid",
      company: "K-12 EdTech Inc.",
      sector: "Education Technology",
      innovation: "Virtual teaching robots and digitized learning",
      impact: "Streamlines and automates education for students",
      funding: "NICW programme",
      image: "/loide.jpeg",
    },
    {
      name: "Selma Matheus",
      company: "Kalahari Truffles (Pty) Ltd",
      sector: "Agriculture & Food",
      innovation: "Farming and supply of Kalahari truffles",
      impact: "Expands market for Namibian truffles beyond Africa",
      funding: "NICW programme",
      image: "/selma.jpeg",
    },
    {
      name: "Saarty Mikka",
      company: "Kernytic Investments CC",
      sector: "Interior Design",
      innovation: "Interior Design",
      impact: "Enables seamless payments to s",
      funding: "NICW programme",
      image: "/saarty.jpeg",
    },
    {
      name: "Eiretha-Cynthia Rukira-Veiko",
      company: "Oilonga-Media CC",
      sector: "Media & Procurement",
      innovation: "Innovative solutions for procurement challenges",
      impact: "Supports bidders and buyers in the procurement market",
      funding: "NICW programme",
      image: "/elretha.jpeg",
    },
    {
      name: "Anna-Liisa Hatutale",
      company: "Landu Fish Spreads",
      sector: "Food Processing",
      innovation: "Value-added fish products (e.g., fish spreads)",
      impact: "Enhances utilization of horse mackerel and reduces waste",
      funding: "NICW programme",
      image: "/anna.jpeg",
    },
    {
      name: "Kristofine Ekandjo",
      company: "Tulande Online",
      sector: "E-Commerce",
      innovation: "Online platform for digital trade",
      impact: "Expands market access for vendors and buyers",
      funding: "NICW programme",
      image: "/kristofine.jpeg",
    },
    {
      name: "Matjita Hengua",
      company: "Otjisajiena Farming",
      sector: "Agriculture",
      innovation: "Home gardening and homemade jams",
      impact: "Promotes local food production and self-sufficiency",
      funding: "NICW programme",
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEX////LycbIxsPo5+bMysfs6+r7+/vRz83f3tzX1dPi4d/b2tjw7+7z8vLZ2NXv7+4G0JKeAAAEoElEQVR4nO2d25qrIAxGK4qIp77/2+5ae7JTD0hMgvtfV3MxF6wPCBAJvVwAAAAAAAAAAAAAAAAAAADA2Sg7W1e9975v6vxaSjeHmNI2hRnIBsa/fN5JN4uKMncPtSnGFNUZJDv/U+8p6ax0AyPp3LzeQ7LIpRsZQenX/EbHq3RD91Jv8bs7+iRDa7k6QD8dW+nmhmMD/AbFSrrBoVRhgjdFJ93kMPpQwSHgpDQZN8XQv6SjuFMwS6YXm52CN0Xppm8j3y14WxilG7+Fbr9gIotGhF+WxNK/Y52YIi2wxjVW0DTSCitE+g2Kuk/Fm48TC+jevhEIZkbzcZGiC3V3IoWf6pkYeCacpZcWmcXRCGZGWmSOkqgLM6M1xRix5f5C6wbcUwmqHaZkglqXxKhj05dhLS3zE7ppqHUiBicQF9CZzqALNFpDTUFpqDLrRjhIlW5NSQ1VpmtIDTXu28h2pWoNz9+HmIdhhipj6fnXw/PvaSj3pTpz++c/W5z/fEgYTHUuFv9Dnub8uTa6fKna64pkOW+V6/0A1TDVOkgvVNFUayQdoNnW6Ey0jZDEGp1nwycUnaj5E/CFYiYq/WbxIj6cKg6kI7Frot618ElksNEdZkai7n2pv/N1JyaeKo+jT/Zegs7SuekdUkvyif4o82Kfos4k6Qy7FNPpwYHgq8JpFZQMBF5TTOOW/pQuC6ldU5u3WGRzZYlxqY3QJ+s1sne/RDtwxBardcBa89ubsb9L1Z9+Rep+A12VzdTjm15xzimMrvbvJxVGOeMq5Yf5YDpbN94N+Ka2KW3QAAAAAAAAAAAAcF661uah2LZLIy/c1n58yHMPmausas0y92YpO7qBIQlXa5Vsl97xDLN0GvP8du+n7RlJbbnwltRvdNTUj9veKQ121POuKWUpydRRyf2hQzrwoVgoyP6Xq18I4xzF77lFv162qigcVNujBaUfGmQQlFUkrFZbVBQbqKT16YuKUuGGsvB3RVFm0ThwHfyLhOBhO5lfGIEn3Ngm4UORf49KWZu+CW5BlpXwE/Ylg6qYMkCRN7dx+Hb0hyHv1oa/C5kLvJm2a1+GnGmNRkCQt7ZUogtZ924CceZuyBdrZAYp5zAVEuRbEpm3pB+GXOdEqiefww25JiLNu+R74CrAZD9WvGEy5MtefMMVasQE2dZ8sWnIZSi2WLC96yJpyJOtgWH6hpKxlGm1kEhhPAx5BAV3bVwF3yJZmgG+TI3UMOXLtgkdnzgzpjKdyJkwFVkSeb8EC4xT7gsLrN9H74Ls30iZFSWuuLGuijJXMYN+WjwSqQt8pG+UzyP5uAtLSJW9u3f8SJW/YnpwTNXwE8jHXPJ++Il34IgNefMqxE/69uwHNVEtyVSw11Q7U+7/xfg5P69jgL4po3+Qe+Ln1NRafHBzJJI0Tuv7UWVF4GhMr218TsgXHy/b4Feorc17MTxetr/7tA7PL9rm9wttK3pevD4mhK5yAeWkxhRNIr33SWm3WN7+o+hz9XNvlrLLG5dN3tt7mw01v319TdfuTdnZvGq8K8Yq76xwvq9qewo3AAAAAAAAAAAAAAAAAAAA8OIfvUM8YTLc6kkAAAAASUVORK5CYII=",
    },
    {
      name: "Maria Shipapo",
      company: "MIST Agricultural Laboratory",
      sector: "Agri-Tech",
      innovation: "Agricultural laboratory services",
      impact: "Agricultural laboratory services",
      funding: "NICW programme",
      image: "/maria.jpeg",
    },
    {
      name: "Ndinelago Illeka",
      company: "Granny's Green Garden",
      sector: "Agriculture",
      innovation: "Local farming and produce",
      impact: "Promotes sustainable gardening practices",
      funding: "NICW programme",
      image: "/lilekela.jpeg", //
    },
    {
      name: "Lydia Ndinelao Horn",
      company: "Namibia Institute of Seeds",
      sector: "Agriculture",
      innovation: "Seed production and distribution",
      impact: "Enhances agricultural productivity with quality seeds",
      funding: "NICW programme",
      image: "/lydia.jpeg",
    },
    {
      name: "Ndapewa Treresius",
      company: "Possible Trading cc",
      sector: "Disability Tech",
      innovation: "Software for visually and hearing-impaired communities",
      impact:
        "Improves accessibility and quality of life for persons with disabilities",
      funding: "NICW programme",
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEX////LycbIxsPo5+bMysfs6+r7+/vRz83f3tzX1dPi4d/b2tjw7+7z8vLZ2NXv7+4G0JKeAAAEoElEQVR4nO2d25qrIAxGK4qIp77/2+5ae7JTD0hMgvtfV3MxF6wPCBAJvVwAAAAAAAAAAAAAAAAAAADA2Sg7W1e9975v6vxaSjeHmNI2hRnIBsa/fN5JN4uKMncPtSnGFNUZJDv/U+8p6ax0AyPp3LzeQ7LIpRsZQenX/EbHq3RD91Jv8bs7+iRDa7k6QD8dW+nmhmMD/AbFSrrBoVRhgjdFJ93kMPpQwSHgpDQZN8XQv6SjuFMwS6YXm52CN0Xppm8j3y14WxilG7+Fbr9gIotGhF+WxNK/Y52YIi2wxjVW0DTSCitE+g2Kuk/Fm48TC+jevhEIZkbzcZGiC3V3IoWf6pkYeCacpZcWmcXRCGZGWmSOkqgLM6M1xRix5f5C6wbcUwmqHaZkglqXxKhj05dhLS3zE7ppqHUiBicQF9CZzqALNFpDTUFpqDLrRjhIlW5NSQ1VpmtIDTXu28h2pWoNz9+HmIdhhipj6fnXw/PvaSj3pTpz++c/W5z/fEgYTHUuFv9Dnub8uTa6fKna64pkOW+V6/0A1TDVOkgvVNFUayQdoNnW6Ey0jZDEGp1nwycUnaj5E/CFYiYq/WbxIj6cKg6kI7Frot618ElksNEdZkai7n2pv/N1JyaeKo+jT/Zegs7SuekdUkvyif4o82Kfos4k6Qy7FNPpwYHgq8JpFZQMBF5TTOOW/pQuC6ldU5u3WGRzZYlxqY3QJ+s1sne/RDtwxBardcBa89ubsb9L1Z9+Rep+A12VzdTjm15xzimMrvbvJxVGOeMq5Yf5YDpbN94N+Ka2KW3QAAAAAAAAAAAAcF661uah2LZLIy/c1n58yHMPmausas0y92YpO7qBIQlXa5Vsl97xDLN0GvP8du+n7RlJbbnwltRvdNTUj9veKQ121POuKWUpydRRyf2hQzrwoVgoyP6Xq18I4xzF77lFv162qigcVNujBaUfGmQQlFUkrFZbVBQbqKT16YuKUuGGsvB3RVFm0ThwHfyLhOBhO5lfGIEn3Ngm4UORf49KWZu+CW5BlpXwE/Ylg6qYMkCRN7dx+Hb0hyHv1oa/C5kLvJm2a1+GnGmNRkCQt7ZUogtZ924CceZuyBdrZAYp5zAVEuRbEpm3pB+GXOdEqiefww25JiLNu+R74CrAZD9WvGEy5MtefMMVasQE2dZ8sWnIZSi2WLC96yJpyJOtgWH6hpKxlGm1kEhhPAx5BAV3bVwF3yJZmgG+TI3UMOXLtgkdnzgzpjKdyJkwFVkSeb8EC4xT7gsLrN9H74Ls30iZFSWuuLGuijJXMYN+WjwSqQt8pG+UzyP5uAtLSJW9u3f8SJW/YnpwTNXwE8jHXPJ++Il34IgNefMqxE/69uwHNVEtyVSw11Q7U+7/xfg5P69jgL4po3+Qe+Ln1NRafHBzJJI0Tuv7UWVF4GhMr218TsgXHy/b4Feorc17MTxetr/7tA7PL9rm9wttK3pevD4mhK5yAeWkxhRNIr33SWm3WN7+o+hz9XNvlrLLG5dN3tt7mw01v319TdfuTdnZvGq8K8Yq76xwvq9qewo3AAAAAAAAAAAAAAAAAAAA8OIfvUM8YTLc6kkAAAAASUVORK5CYII=", //
    },
    {
      name: "Twahafffwa Izaloo Nambuwa",
      company: "Petwa Medical Practice",
      sector: "Healthcare",
      innovation: "Medical-grade topical products for skin conditions",
      impact: "Provides solutions for acne and pigmentation issues",
      funding: "NICW programme",
      image: "/nambuwa.jpeg",
    },
    {
      name: "Helaria Shuudeni",
      company: "VIBERA INVESTMENTS CC",
      sector: "Body Care",
      innovation: "Natural and moisturizing body care products",
      impact: "Offers spunny and sustainable personal care solutions",
      funding: "NICW programme",
      image: "/helaria.jpeg",
    },
    {
      name: "Octavius Maketo",
      company: "Ubuntu Aquatic CC",
      sector: "Sustainable Agriculture",
      innovation: "Integration of aquaculture and hydroponics",
      impact: "Addresses waste disposal and promotes sustainability",
      funding: "BOOST-UP programme",
      image: "/maketo.jpeg",
    },
    {
      name: "Sunday Simataa",
      company: "Kasi Cover",
      sector: "Insuretech",
      innovation:
        "Insurance product that auto-deducts N$2 airtime via USSD codes for health/life insurance policies",
      impact:
        "Improves accessibility to insurance for underserved populations using mobile technology",
      funding: "BOOST-UP programme",
      image:
        "https://media.licdn.com/dms/image/v2/D4D03AQFVO0X_w-RGQg/profile-displayphoto-shrink_400_400/B4DZVgbjrCHAAk-/0/1741079592326?e=1756339200&v=beta&t=bakVanUJwmrnmV3M_LRFX6kTrAusEV9ykFhoq-UGsXc",
    },
    {
      name: "Tutaleni Ilonga",
      company: "Edu Game",
      sector: "Education Technology",
      innovation:
        "Immersive institution teaching children to create games that address societal issues; developing a gamified national curriculum",
      impact:
        "Empowers youth through creative problem-solving and redefines traditional education models",
      funding: "BOOST-UP programme",
      image:
        "https://hosting.renderforestsites.com/17141523/1149766/media/7fdf2f353715fff5c5e7b43fa17d811b.jpg",
    },
  ];

  return (
    <div>
      {/* Page Header */}
      <section
        className="relative min-h-[75vh] flex items-center justify-center"
        style={{
          backgroundImage: `url(${pexel4})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/90"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-10 leading-heading text-white">
              Innovators Hub
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-body opacity-90 text-white">
              Celebrating the achievements of innovative Namibian entrepreneurs
              making a real impact.
            </p>
          </div>
        </div>
      </section>

      {/* Innovators Hub */}
      <section id="innovators-hub" className="py-16 bg-ncrst-grey-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ncrst-grey mb-4 leading-heading">
              Innovators Hub
            </h2>
            <p className="text-lg text-ncrst-grey-dark max-w-3xl mx-auto leading-body">
              Celebrating the achievements of innovative Namibian entrepreneurs
              making a real impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {innovators.map((innovator, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <img
                    src={innovator.image}
                    alt={innovator.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-ncrst-green text-white px-3 py-1 rounded-full text-sm font-medium">
                      {innovator.sector}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-ncrst-green/10 w-10 h-10 rounded-lg flex items-center justify-center">
                      <Star className="text-ncrst-green" size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-ncrst-grey leading-heading">
                        {innovator.name}
                      </h3>
                      <p className="text-sm text-ncrst-blue font-medium">
                        {innovator.company}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div>
                      <h4 className="font-semibold text-ncrst-grey mb-1">
                        Innovation
                      </h4>
                      <p className="text-ncrst-grey-dark">
                        {innovator.innovation}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-ncrst-grey mb-1">
                        Impact
                      </h4>
                      <p className="text-ncrst-grey-dark">{innovator.impact}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-ncrst-grey mb-1">
                        Funding
                      </h4>
                      <p className="text-ncrst-green font-medium">
                        {innovator.funding}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Innovation;
