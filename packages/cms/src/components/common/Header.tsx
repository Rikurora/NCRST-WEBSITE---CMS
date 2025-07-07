import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useContent } from '../../context/ContentContext';
import { FiLogOut, FiUser, FiSettings, FiBell } from 'react-icons/fi';
import { Modal } from './Modal';
import type { Notification } from '@ncrst/shared';

export function Header() {
  const { user, logout, switchRole, changePassword } = useAuth();
  const { notifications, markNotificationRead } = useContent();
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const userNotifications = notifications.filter(n => n.userId === user?.id);
  const unreadCount = userNotifications.filter(n => !n.read).length;

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      alert('New passwords do not match');
      return;
    }
    
    const success = await changePassword(passwordForm.currentPassword, passwordForm.newPassword);
    if (success) {
      alert('Password changed successfully');
      setShowPasswordModal(false);
      setPasswordForm({ currentPassword: '', newPassword: '', confirmPassword: '' });
    } else {
      alert('Failed to change password. Please check your current password.');
    }
  };

  const handleNotificationClick = (notification: Notification) => {
    markNotificationRead(notification.id);
  };

  return (
    <>
      <header className="bg-gradient-to-r from-[#777675] to-[#6a6968] shadow-lg border-b-4 border-[#ffd332]">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gradient-to-br from-[#ffd332] to-[#e6be2d] rounded-lg flex items-center justify-center">
              <span className="text-[#777675] font-bold text-lg">N</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">NCRST Portal</h1>
              <span className="px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-[#ffd332] to-[#e6be2d] text-[#777675] capitalize">
                {user?.role === 'ccm_admin' ? 'CCM Administrator' : user?.role}
              </span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative p-2 text-gray-300 hover:text-white transition-colors"
              >
                <FiBell className="h-6 w-6" />
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {unreadCount}
                  </span>
                )}
              </button>
              
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                  <div className="p-4 border-b border-gray-200">
                    <h3 className="font-semibold text-gray-900">Notifications</h3>
                  </div>
                  <div className="max-h-64 overflow-y-auto">
                    {userNotifications.length > 0 ? (
                      userNotifications.map((notification) => (
                        <div
                          key={notification.id}
                          onClick={() => handleNotificationClick(notification)}
                          className={`p-3 border-b border-gray-100 cursor-pointer hover:bg-gray-50 ${
                            !notification.read ? 'bg-blue-50' : ''
                          }`}
                        >
                          <div className="font-medium text-sm text-gray-900">{notification.title}</div>
                          <div className="text-xs text-gray-600 mt-1">{notification.message}</div>
                          <div className="text-xs text-gray-400 mt-1">
                            {new Date(notification.createdAt).toLocaleDateString()}
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="p-4 text-center text-gray-500">No notifications</div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Role Switcher for Demo */}
            <select
              value={user?.role || ''}
              onChange={(e) => switchRole(e.target.value as 'ccm_admin' | 'editor' | 'checker')}
              className="px-3 py-1 text-sm bg-[#6a6968] text-white border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffd332]"
            >
              <option value="ccm_admin">CCM Admin</option>
              <option value="editor">Editor</option>
              <option value="checker">Checker</option>
            </select>
            
            <div className="flex items-center space-x-2 text-white">
              <FiUser className="h-5 w-5" />
              <span className="text-sm font-medium">{user?.name}</span>
            </div>

            {user?.canChangePassword && (
              <button
                onClick={() => setShowPasswordModal(true)}
                className="p-2 text-gray-300 hover:text-white transition-colors"
                title="Change Password"
              >
                <FiSettings className="h-5 w-5" />
              </button>
            )}
            
            <button
              onClick={logout}
              className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-300 hover:text-white transition-colors bg-red-600 hover:bg-red-700 rounded-md"
            >
              <FiLogOut className="h-4 w-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Password Change Modal */}
      <Modal
        isOpen={showPasswordModal}
        onClose={() => setShowPasswordModal(false)}
        title="Change Password"
        size="sm"
      >
        <form onSubmit={handlePasswordChange} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Current Password
            </label>
            <input
              type="password"
              value={passwordForm.currentPassword}
              onChange={(e) => setPasswordForm({ ...passwordForm, currentPassword: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffd332]"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              New Password
            </label>
            <input
              type="password"
              value={passwordForm.newPassword}
              onChange={(e) => setPasswordForm({ ...passwordForm, newPassword: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffd332]"
              required
              minLength={6}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm New Password
            </label>
            <input
              type="password"
              value={passwordForm.confirmPassword}
              onChange={(e) => setPasswordForm({ ...passwordForm, confirmPassword: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffd332]"
              required
              minLength={6}
            />
          </div>
          
          <div className="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              onClick={() => setShowPasswordModal(false)}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-[#777675] bg-gradient-to-r from-[#ffd332] to-[#e6be2d] rounded-md hover:from-[#e6be2d] hover:to-[#d4a829]"
            >
              Change Password
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
}