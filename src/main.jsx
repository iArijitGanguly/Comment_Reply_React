import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CommentReplyProvider from './contexts/CommentReplyContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <CommentReplyProvider>
    <App />
  </CommentReplyProvider>  
)
