// pages/profile.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProfilePage: React.FC = () => {
  const [profile, setProfile] = useState<{
    name: string;
    email: string;
    zipcode: string;
    city: string;
    state: string;
    country: string;
    street: string;
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

  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (profile) {
      try {
        const updatedProfile = { ...profile, name: 'New Name' }; // Example update
        await axios.post('/api/profile/update', updatedProfile);
        setProfile(updatedProfile);
      } catch (error) {
        console.error('Error updating profile:', error);
      }
    }
  };

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
          <p>Zipcode: {profile.zipcode}</p>
          <p>City: {profile.city}</p>
          <p>State: {profile.state}</p>
          <p>Country: {profile.country}</p>
          <p>Street: {profile.street}</p>
          <form onSubmit={handleUpdate}>
            <button type="submit">Update Profile</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
