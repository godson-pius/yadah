"use client";
// pages/admin/dashboard.tsx
import { useState } from "react";
import { FiUsers } from "react-icons/fi";
import Link from "next/link";
import { api } from "../../../convex/_generated/api";
import { useQuery } from "convex/react";
import AdminLogin from "@/components/Auth";

interface User {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  createdAt: string;
}

export default function AdminDashboard() {
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const [emailSubject, setEmailSubject] = useState<string>("");
  const [emailMessage, setEmailMessage] = useState<string>("");
  const [emailLoading, setEmailLoading] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [statusFilter, setStatusFilter] = useState<
    | "all"
    | "Media"
    | "Content Creation"
    | "Ushering"
    | "Prayer"
    | "Protocol"
    | "Venue Management"
    | "Logistics and transportation"
    | "General Production"
    | "Security"
  >("all");
  const [emailSuccess, setEmailSuccess] = useState<string>("");
  const [adminAuth] = useState<string | null>(
    localStorage.getItem("adminAuth"),
  );
  const usersPerPage = 8;
  const url = "https://yadahconcert.vercel.app";
  // const url = "http://localhost:3000";

  // Use the query result directly - no need for separate state
  const users = useQuery(api.users.getUsers) || [];
  const loading = users === undefined; // Convex returns undefined while loading

  const handleSelectUser = (userId: string) => {
    setSelectedUsers((prev) =>
      prev.includes(userId)
        ? prev.filter((id) => id !== userId)
        : [...prev, userId],
    );
  };

  const handleSelectAll = () => {
    const filteredUsers = getFilteredUsers();
    const allSelected = filteredUsers.every((user) =>
      selectedUsers.includes(user._id),
    );

    if (allSelected) {
      setSelectedUsers((prev) =>
        prev.filter((id) => !filteredUsers.some((user) => user._id === id)),
      );
    } else {
      const newSelections = filteredUsers.map((user) => user._id);
      setSelectedUsers((prev) => [...new Set([...prev, ...newSelections])]);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    window.location.href = "/control";
  };

  const simulateEmailSend = async (
    userIds: string[] = selectedUsers,
  ): Promise<void> => {
    if (!emailSubject.trim() || !emailMessage.trim()) {
      alert("Please fill in both subject and message");
      return;
    }

    const targetUsers = userIds.length > 0 ? userIds : selectedUsers;
    if (targetUsers.length === 0) {
      alert("Please select at least one user");
      return;
    }

    try {
      setEmailLoading(true);

      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Simulate success
      const targetUserEmails = users
        .filter((user) => targetUsers.includes(user._id))
        .map((user) => user.email);

      targetUserEmails.map(async (email) => {
        const mailData = {
          subject: emailSubject,
          email: email,
          message: emailMessage,
        };

        const sendmail = await fetch(`${url}/api/send-email`, {
          method: "POST",
          body: JSON.stringify(mailData),
        });

        if (sendmail.status === 200) {
          console.log("📧 Email sent simulation:", {
            to: email,
            subject: emailSubject,
            message: emailMessage,
            timestamp: new Date().toISOString(),
          });
          setEmailSuccess(
            `Email sent successfully to ${targetUsers.length} user(s)!`,
          );
          setEmailSubject("");
          setEmailMessage("");
          setSelectedUsers([]);
        }
      });

      // Clear success message after 3 seconds
      setTimeout(() => setEmailSuccess(""), 3000);
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Error sending email. Please try again.");
    } finally {
      setEmailLoading(false);
    }
  };

  const getFilteredUsers = (): User[] => {
    return users.filter((user) => {
      const matchesSearch =
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus =
        statusFilter === "all" || user.preferredUnit === statusFilter;
      return matchesSearch && matchesStatus;
    });
  };

  const getPaginatedUsers = (): User[] => {
    const filteredUsers = getFilteredUsers();
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    return filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  };

  const totalPages = Math.ceil(getFilteredUsers().length / usersPerPage);

  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getStatusBadge = (status: string) => {
    const baseClasses = "px-2 py-1 text-xs font-medium rounded-full";
    const statusClasses = {
      active: "bg-green-100 text-green-800",
      inactive: "bg-gray-100 text-gray-800",
    };

    return (
      <span
        className={`${baseClasses} ${statusClasses[status as keyof typeof statusClasses]}`}
      >
        {status}
      </span>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading users...</p>
        </div>
      </div>
    );
  }

  // Check auth
  if (!adminAuth || adminAuth !== "authenticated") {
    return <AdminLogin />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Admin Dashboard
              </h1>
              <p className="text-gray-600">Manage users and send emails</p>
            </div>
            <div className="flex items-center space-x-1">
              <div className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full animate-pulse hidden lg:block">
                Yadah Mode
              </div>
              <button
                onClick={handleLogout}
                className="px-3 py-2 text-sm font-medium text-red-600 hover:text-red-800 hover:bg-red-50 rounded-md transition-colors"
              >
                Logout
              </button>
              <Link
                href={"/"}
                className="px-2 py-2 text-sm font-medium text-gray-600 hover:text-gray-900"
              >
                Website
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Success Message */}
        {emailSuccess && (
          <div className="mb-6 bg-green-50 border border-green-200 rounded-md p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-green-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-green-800">
                  {emailSuccess}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-[url('/grudge.jpg')] bg-cover bg-center p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 flex items-center gap-2">
              {" "}
              <FiUsers size={20} /> Total Users
            </h3>
            <p className="text-3xl font-bold text-orange-600">{users.length}</p>
          </div>

          <div className="bg-[url('/grudge.jpg')] bg-cover bg-center p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 flex items-center gap-2">
              <FiUsers size={20} /> Selected Users
            </h3>
            <p className="text-3xl font-bold text-orange-600">
              {selectedUsers.length}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Users Table */}
          <div className="lg:col-span-2">
            <div className="bg-[url('/white3.jpg')] bg-cover bg-center rounded-lg shadow-sm text-sm">
              <div className="p-6 border-b">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-gray-900">Users</h2>
                  <button
                    onClick={() => window.location.reload()}
                    className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
                  >
                    Refresh
                  </button>
                </div>

                {/* Filters */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <input
                    type="text"
                    placeholder="Search users by name or email..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
                  />
                  <select
                    value={statusFilter}
                    onChange={(e) =>
                      setStatusFilter(
                        e.target.value as
                          | "all"
                          | "Media"
                          | "Content Creation"
                          | "Ushering"
                          | "Prayer"
                          | "Protocol"
                          | "Venue Management"
                          | "Logistics and transportation"
                          | "General Production"
                          | "Security",
                      )
                    }
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="all">All Unit</option>
                    <option value="Media">Media</option>
                    <option value="Content Creation">Content creation</option>
                    <option value="Ushering">Ushering</option>
                    <option value="Prayer">Prayer</option>
                    <option value="Protocol">Protocol</option>
                    <option value="Venue Management">Venue management</option>
                    <option value="Logistics and transportation">
                      Logistics and transportation
                    </option>
                    <option value="General Production">
                      General Production
                    </option>
                    <option value="Security">Security</option>
                  </select>
                </div>

                {/* Select All */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={
                        getFilteredUsers().length > 0 &&
                        getFilteredUsers().every((user) =>
                          selectedUsers.includes(user._id),
                        )
                      }
                      onChange={handleSelectAll}
                      className="mr-2 h-4 w-4 text-blue-600 rounded border-gray-300"
                    />
                    <span className="text-sm text-gray-600">
                      Select all visible users
                    </span>
                  </div>
                  {selectedUsers.length > 0 && (
                    <button
                      onClick={() => setSelectedUsers([])}
                      className="text-sm text-red-600 hover:text-red-800"
                    >
                      Clear selection
                    </button>
                  )}
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Select
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Email
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Registered
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {getPaginatedUsers().map((user) => (
                      <tr key={user._id} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <input
                            type="checkbox"
                            checked={selectedUsers.includes(user._id)}
                            onChange={() => handleSelectUser(user._id)}
                            className="h-4 w-4 text-blue-600 rounded border-gray-300"
                          />
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">
                          <div>
                            {user.name}
                            {user.phone && (
                              <div className="text-xs text-gray-500">
                                {user.phone}
                              </div>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          {user.email}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          {formatDate(user.createdAt)}
                        </td>
                        <td className="px-1 py-4">
                          <button
                            onClick={() => simulateEmailSend([user._id])}
                            disabled={
                              emailLoading ||
                              !emailSubject.trim() ||
                              !emailMessage.trim()
                            }
                            className="text-blue-600 hover:text-blue-800 text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            Send Email
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="px-6 py-3 border-t flex justify-between items-center">
                  <div className="text-sm text-gray-600">
                    Showing {(currentPage - 1) * usersPerPage + 1} to{" "}
                    {Math.min(
                      currentPage * usersPerPage,
                      getFilteredUsers().length,
                    )}{" "}
                    of {getFilteredUsers().length} users
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() =>
                        setCurrentPage((prev) => Math.max(prev - 1, 1))
                      }
                      disabled={currentPage === 1}
                      className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Previous
                    </button>
                    <span className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded">
                      {currentPage} of {totalPages}
                    </span>
                    <button
                      onClick={() =>
                        setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                      }
                      disabled={currentPage === totalPages}
                      className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Email Panel */}
          <div className="lg:col-span-1 text-sm">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Send Email
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={emailSubject}
                    onChange={(e) => setEmailSubject(e.target.value)}
                    placeholder="Enter email subject"
                    className="w-full px-3 py-2 border border-gray-300 text-base rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    value={emailMessage}
                    onChange={(e) => setEmailMessage(e.target.value)}
                    placeholder="Enter your message here..."
                    rows={6}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-base resize-none"
                  />
                </div>

                <div className="bg-gray-50 p-3 rounded-md">
                  <p className="text-sm text-gray-600 mb-1">
                    <strong>{selectedUsers.length}</strong> user(s) selected
                  </p>
                  {selectedUsers.length > 0 && (
                    <div className="text-xs text-gray-500">
                      Recipients:{" "}
                      {users
                        .filter((user) => selectedUsers.includes(user._id))
                        .map((user) => user.email)
                        .join(", ")}
                    </div>
                  )}
                </div>

                <button
                  onClick={() => simulateEmailSend()}
                  disabled={
                    emailLoading ||
                    selectedUsers.length === 0 ||
                    !emailSubject.trim() ||
                    !emailMessage.trim()
                  }
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white font-medium py-3 px-4 rounded-md transition duration-200 disabled:cursor-not-allowed"
                >
                  {emailLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </div>
                  ) : (
                    `Send Email to ${selectedUsers.length} User(s)`
                  )}
                </button>

                <div className="text-xs text-gray-500 mt-2 animate-pulse">
                  💡 Yadah Mega Concert 2025
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
