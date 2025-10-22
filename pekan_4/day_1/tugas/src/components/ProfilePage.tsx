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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-2xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">
            Halaman Profil
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Kelola informasi profil Anda dengan mudah
          </p>
        </div>

        {/* Alert Info */}
        <Alert className="bg-blue-50 border-blue-200 dark:bg-blue-950 dark:border-blue-800">
          <AlertDescription className="text-blue-800 dark:text-blue-200">
            Anda dapat mengedit informasi profil di bawah ini. Semua perubahan akan tersimpan secara lokal.
          </AlertDescription>
        </Alert>

        {/* Profile Card */}
        <Card className="w-full max-w-2xl mx-auto shadow-lg border-0">
          <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-t-lg">
            <CardTitle className="text-2xl">Informasi Profil</CardTitle>
            <CardDescription className="text-blue-100">
              Kelola data pribadi dan preferensi Anda
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 p-6">
            {/* Nama */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Nama Lengkap
              </label>
              <Input
                value={profile.name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange('name', e.target.value)}
                placeholder="Masukkan nama lengkap"
                className="w-full"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <Input
                type="email"
                value={profile.email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange('email', e.target.value)}
                placeholder="Masukkan email"
                className="w-full"
              />
            </div>

            {/* Bio */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Bio
              </label>
              <textarea
                value={profile.bio}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleChange('bio', e.target.value)}
                placeholder="Ceritakan sedikit tentang diri Anda"
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white resize-none"
              />
            </div>

            {/* Skills Tags */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Skills
              </label>
              <div className="flex flex-wrap gap-2">
                {['React', 'Tailwind CSS', 'JavaScript', 'TypeScript'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </CardContent>
          <CardFooter className="bg-gray-50 dark:bg-gray-800 rounded-b-lg p-6 flex justify-between">
            <Button variant="outline" className="border-gray-300 dark:border-gray-600">
              Batalkan
            </Button>
            <Button 
              onClick={handleSave}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Simpan Perubahan
            </Button>
          </CardFooter>
        </Card>

        {/* Stats Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="text-center p-6 bg-white dark:bg-gray-800 shadow-md">
            <CardContent className="p-0">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">12</div>
              <p className="text-gray-600 dark:text-gray-300 mt-2">Proyek Selesai</p>
            </CardContent>
          </Card>
          <Card className="text-center p-6 bg-white dark:bg-gray-800 shadow-md">
            <CardContent className="p-0">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400">8</div>
              <p className="text-gray-600 dark:text-gray-300 mt-2">Skills</p>
            </CardContent>
          </Card>
          <Card className="text-center p-6 bg-white dark:bg-gray-800 shadow-md">
            <CardContent className="p-0">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">24</div>
              <p className="text-gray-600 dark:text-gray-300 mt-2">Kontribusi</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage