# URL Shortener

A modern URL shortener application built with Node.js, Express, and MongoDB using ES modules.

## 🚀 Features
- **Shorten URLs**: Convert long URLs into short, shareable links
- **RESTful API**: Clean and intuitive API endpoints
- **ES Modules**: Modern JavaScript with import/export syntax
- **MongoDB Integration**: Persistent storage with Mongoose ODM

## 🛠️ Tech Stack
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **ID Generation**: NanoID for unique short codes
- **Environment**: dotenv for configuration management

## 📦 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)

### Steps
1. **Clone the repository**:
```bash
git clone https://github.com/YOUR_USERNAME/url-shortener.git
cd url-shortener
```

2. **Install dependencies**:
```bash
npm install
```

3. **Environment setup**:
Create a `.env` file in the root directory:
```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/urlshortener
```

4. **Start the server**:
```bash
npm start
```

## 🎯 API Endpoints

### Shorten URL
- **POST** `/shorten`
- **Body**: `{ "originalUrl": "https://example.com/very-long-url" }`
- **Response**: `{ "shortUrl": "http://localhost:3000/abc123" }`

### Redirect to Original URL
- **GET** `/:shortUrl`
- **Response**: Redirects to original URL

## 📁 Project Structure
```
├── Config/
│   └── db.js          # Database connection
├── Models/
│   └── Url.js         # URL schema/model
├── controllers/
│   └── URL.js         # URL controller logic
├── routes/
│   └── url.js         # URL routes
├── index.js           # Main application file
├── package.json       # Dependencies and scripts
└── .gitignore        # Git ignore rules
```

## 🚀 Quick Start
```bash
# Install dependencies
npm install

# Start development server
npm start

# Server runs on http://localhost:3000
```

## 🤝 Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License
ISC

## Credits
Developed by Mohammed Sadiq
