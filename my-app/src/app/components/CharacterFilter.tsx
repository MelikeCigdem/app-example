"use client";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const CharacterFilter = () => {
  const router = useRouter();
  const [status, setStatus] = useState('');
  const [gender, setGender] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setStatus(params.get('status') || '');
    setGender(params.get('gender') || '');
  }, []);

  // Filtre değişikliği işlemi
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;

    // URL parametrelerini güncelleme
    const params = new URLSearchParams(window.location.search);
    if (value) {
      params.set(name, value);
    } else {
      params.delete(name);
    }
    
    const url = `/?${params.toString()}`;
    router.push(url);
  };

  // Filtre temizleme işlemi
  const handleClearFilters = () => {
    setStatus('');
    setGender('');
    router.push('/');
  };

  const isFilterApplied = status || gender;

  return (
    <div className="flex flex-wrap gap-6 justify-center md:justify-start items-center text-center">
      <select
        name="status"
        onChange={(e) => {
          handleFilterChange(e);
          setStatus(e.target.value);
        }}
        value={status}
        className="bg-white border border-gray-300 text-black rounded-lg p-3 w-full md:w-48 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
      >
        <option value="">All Status</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>

      <select
        name="gender"
        onChange={(e) => {
          handleFilterChange(e);
          setGender(e.target.value);
        }}
        value={gender}
        className="bg-white border border-gray-300 text-black rounded-lg p-3 w-full md:w-48 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
      >
        <option value="">All Genders</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>

      <button
        onClick={handleClearFilters}
        className={`bg-white border border-gray-300 text-black rounded-lg p-3 hover:bg-gray-100 transition ${isFilterApplied ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'}`}
        disabled={!isFilterApplied}
      >
        Clear Filters
      </button>
    </div>
  );
};

export default CharacterFilter;
