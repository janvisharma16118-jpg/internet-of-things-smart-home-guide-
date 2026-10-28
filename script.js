// All topic content lives here. Edit this file to change or add topics.
const topics = [
  {
    id: "ai",
    name: "Artificial Intelligence",
    tagline: "Machines that learn from data",
    summary: "Artificial intelligence lets computers perform tasks that normally need human thinking, such as understanding language, recognising images and making decisions.",
    points: [
      "Models are trained on large amounts of data to find patterns.",
      "Machine learning improves results without writing every rule by hand.",
      "Generative AI can create text, images, code and audio."
    ],
    uses: ["Chatbots and virtual assistants", "Medical image analysis", "Fraud detection in banking"]
  },
  {
    id: "blockchain",
    name: "Blockchain",
    tagline: "A shared record nobody can quietly edit",
    summary: "A blockchain is a digital ledger copied across many computers. Once a record is added, changing it would need agreement from the network.",
    points: [
      "Transactions are grouped into blocks linked together by cryptographic hashes.",
      "Many nodes keep a copy, so there is no single point of control.",
      "Smart contracts run automatically when conditions are met."
    ],
    uses: ["Cryptocurrencies", "Supply chain tracking", "Digital certificates and land records"]
  },
  {
    id: "iot",
    name: "Internet of Things",
    tagline: "Everyday objects connected online",
    summary: "The Internet of Things connects physical devices with sensors and software so they can collect data and share it over the internet.",
    points: [
      "Sensors measure things like temperature, motion or location.",
      "Devices send data to the cloud through Wi-Fi, Bluetooth or mobile networks.",
      "Software analyses the data and can trigger actions automatically."
    ],
    uses: ["Smart homes", "Wearable fitness trackers", "Smart farming and irrigation"]
  },
  {
    id: "quantum",
    name: "Quantum Computing",
    tagline: "Computing with qubits",
    summary: "Quantum computers use the rules of quantum physics. Instead of bits that are 0 or 1, they use qubits that can hold a mix of both states.",
    points: [
      "Superposition lets a qubit represent several states at once.",
      "Entanglement links qubits so they act together.",
      "Quantum algorithms can solve certain problems much faster than normal computers."
    ],
    uses: ["Drug and material discovery", "Optimisation problems", "Future-proof cryptography research"]
  },
  {
    id: "arvr",
    name: "AR and VR",
    tagline: "Blending digital worlds with ours",
    summary: "Virtual reality places you inside a fully digital environment. Augmented reality adds digital objects on top of the real world.",
    points: [
      "VR uses headsets with screens and motion tracking.",
      "AR uses a phone or glasses camera to place objects in your view.",
      "Both rely on fast graphics and accurate tracking."
    ],
    uses: ["Training simulations", "Gaming", "Virtual try-on in shopping apps"]
  },
  {
    id: "5g",
    name: "5G Networks",
    tagline: "Faster, lower-delay connectivity",
    summary: "5G is the fifth generation of mobile networks. It offers higher speeds, lower delay and the ability to connect many more devices at once.",
    points: [
      "Uses new radio frequencies, including high-frequency millimetre waves.",
      "Latency can drop to a few milliseconds.",
      "Network slicing lets operators create virtual networks for different needs."
    ],
    uses: ["Remote surgery research", "Connected vehicles", "Large-scale IoT deployments"]
  }
];
