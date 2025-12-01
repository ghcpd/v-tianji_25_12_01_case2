import { useAuthStore } from '@/store/useAuthStore'
import './Header.css'

export default function Header() {
  const { user, logout } = useAuthStore()

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-search">
          <input
            type="text"
            placeholder="Search..."
            className="header-search-input"
          />
        </div>
        <div className="header-actions">
          <button className="header-notification" aria-label="Notifications">
            🔔
          </button>
          <div className="header-user">
            <span className="header-user-name">{user?.name || 'Guest'}</span>
            <button onClick={logout} className="header-logout">
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

