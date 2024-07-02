// components/ProfileDetails.tsx
// Create a profile page to display and update user information.
// This page will show the user's profile and allow updates.

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProfileDetails: React.FC = () => {
  const [profile, setProfile] = useState<{
    name: string;
    email: string;
  } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data } = await axios.get('/api/profile/1'); // Example user ID
        setProfile(data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>User Profile</h1>
      {profile && (
        <div>
          <p>Name: {profile.name}</p>
          <p>Email: {profile.email}</p>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              try {
                const updatedProfile = { ...profile, name: 'New Name' }; // Example update
                await axios.post('/api/profile/update', updatedProfile);
                setProfile(updatedProfile);
              } catch (error) {
                console.error('Error updating profile:', error);
              }
            }}
          >
            <button type="submit">Update Profile</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ProfileDetails;
