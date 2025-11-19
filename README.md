# OneBox for Emails

A feature-rich email management system with real-time email sync, AI categorization, Slack notifications, suggested replies, and searchable storage using Elasticsearch.

## Backend Features

1. **Real-Time Email Sync**  
   - Sync multiple IMAP accounts (min 2)  
   - Fetch last 30 days of emails  
   - Use persistent IMAP connections (IDLE mode)

2. **Searchable Storage with Elasticsearch**  
   - Store emails locally with Docker  
   - Index emails for fast search  
   - Filter by folder & account

3. **AI-Based Email Categorization**  
   - Labels: Interested, Meeting Booked, Not Interested, Spam, Out of Office

4. **Slack & Webhook Integration**  
   - Slack notifications for Interested emails  
   - Trigger webhooks for automation

5. **AI-Powered Suggested Replies**  
   - Store product & agenda in vector database  
   - Use RAG with LLM for reply suggestions

6. **Frontend Interface**  
   - Display emails  
   - Filter by folder/account  
   - Show AI categorization

## Tech Stack

Node.js, TypeScript, Express, Dotenv, LangChain + Chroma, IMAP (`imapflow`), Elasticsearch, OpenAI/Gemini API, Slack Webhooks, Mailparser

## Running Locally

### Prerequisites
- Node.js v18+  
- Docker Desktop  
- IMAP-enabled Gmail with App password  
- Postman (optional)

### Steps
1. Clone repo:
```
git clone https://github.com/poornima-s-dev/Onebox_Project.git
cd OneBox_Assignment
```
2. Install dependencies:
```
npm install
```
3. Run Elasticsearch:
```
docker-compose pull
docker-compose up
```
4. Start server:
```
npm run dev
```

## Common Issues
- Gmail IMAP login: use App password & 2FA  
- Elasticsearch: ensure Docker is running & port 9200 is free  
- Categorization: check Gemini API key

## Demo
[OneBox Demo](https://drive.google.com/file/d/1BKa12OhYhVJyJJBUxNsWDg1z9geKSWxM/view)
<img width="1920" height="1080" alt="Screenshot (125)" src="https://github.com/user-attachments/assets/3fd6434b-0de8-4284-a4fa-ea0ad1d99415" />


## Credits
- Project structure & error handling assisted by ChatGPT  
- References: Slack Webhooks, Chroma & VectorDB, LangChain
