import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Alert, AlertDescription } from './ui/alert'

// Define TypeScript interfaces
interface Profile {
  name: string
  email: string
  bio: string
}

function ProfilePage() {
  const [profile, setProfile] = useState<Profile>({
    name: 'Muhammad Harits',
    email: 'wert640559@gmail.com',
    bio: 'Frontend Developer yang passionate tentang React dan modern styling'
  })

  const handleChange = (field: keyof Profile, value: string) => {
    setProfile(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSave = (): void => {
    // Simulasi save data
    alert('Profile berhasil disimpan!')
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-8 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-gray-900 dark:text-white mb-3">
            Profile Management
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Manage your personal information and preferences
          </p>
        </div>

        {/* Alert Info */}
        <Alert className="bg-gray-50 border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <AlertDescription className="text-gray-700 dark:text-gray-300">
            You can edit your profile information below. All changes will be saved locally.
          </AlertDescription>
        </Alert>

        {/* Profile Card */}
        <Card className="w-full max-w-3xl mx-auto border border-gray-200 dark:border-gray-700 shadow-sm">
          <CardHeader className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
            <CardTitle className="text-xl font-medium text-gray-900 dark:text-white">
              Personal Information
            </CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-400">
              Update your personal details and bio
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 p-6 bg-white dark:bg-gray-800">
            {/* Nama */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Full Name
              </label>
              <Input
                value={profile.name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange('name', e.target.value)}
                placeholder="Enter your full name"
                className="w-full border-gray-300 dark:border-gray-600 focus:border-gray-400 dark:focus:border-gray-500"
              />
            </div>

            {/* Email */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Email Address
              </label>
              <Input
                type="email"
                value={profile.email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange('email', e.target.value)}
                placeholder="Enter your email address"
                className="w-full border-gray-300 dark:border-gray-600 focus:border-gray-400 dark:focus:border-gray-500"
              />
            </div>

            {/* Bio */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Biography
              </label>
              <textarea
                value={profile.bio}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleChange('bio', e.target.value)}
                placeholder="Tell us about yourself"
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 dark:bg-gray-700 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500 resize-none"
              />
            </div>

            {/* Skills Tags */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Technical Skills
              </label>
              <div className="flex flex-wrap gap-2">
                {['React', 'Tailwind CSS', 'JavaScript', 'TypeScript', 'Node.js', 'PostgreSQL'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 rounded-md text-sm font-normal border border-gray-200 dark:border-gray-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </CardContent>
          <CardFooter className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 p-6 flex justify-end space-x-3">
            <Button 
              variant="outline" 
              className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              Cancel
            </Button>
            <Button 
              onClick={handleSave}
              className="bg-gray-900 text-white hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 border border-gray-900 dark:border-gray-600 transition-colors"
            >
              Save Changes
            </Button>
          </CardFooter>
        </Card>

        {/* Stats Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="text-center p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <CardContent className="p-0">
              <div className="text-2xl font-semibold text-gray-900 dark:text-white">12</div>
              <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">Projects Completed</p>
            </CardContent>
          </Card>
          <Card className="text-center p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <CardContent className="p-0">
              <div className="text-2xl font-semibold text-gray-900 dark:text-white">6</div>
              <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">Skills</p>
            </CardContent>
          </Card>
          <Card className="text-center p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <CardContent className="p-0">
              <div className="text-2xl font-semibold text-gray-900 dark:text-white">24</div>
              <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">Contributions</p>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info Section */}
        <Card className="w-full max-w-3xl mx-auto border border-gray-200 dark:border-gray-700 shadow-sm">
          <CardHeader className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
            <CardTitle className="text-xl font-medium text-gray-900 dark:text-white">
              Account Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 bg-white dark:bg-gray-800 space-y-4">
            <div className="flex justify-between items-center py-2">
              <div>
                <h3 className="text-sm font-medium text-gray-900 dark:text-white">Email Notifications</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Receive updates about your account</p>
              </div>
              <Button variant="outline" className="border-gray-300 dark:border-gray-600 text-xs">
                Manage
              </Button>
            </div>
            <div className="flex justify-between items-center py-2">
              <div>
                <h3 className="text-sm font-medium text-gray-900 dark:text-white">Privacy Settings</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Control your privacy preferences</p>
              </div>
              <Button variant="outline" className="border-gray-300 dark:border-gray-600 text-xs">
                Configure
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default ProfilePage