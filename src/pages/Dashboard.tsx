
import React, { useState } from 'react';
import { ArrowLeft, Play, Image, History, Download, Upload, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('video');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center text-gray-600 hover:text-gray-900">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Retour
              </Link>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <span className="text-xl font-bold">
                  <span className="text-orange-500">Finsya</span> Visual
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-gray-900">
                <Settings className="w-5 h-5" />
              </button>
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="mb-8">
          <nav className="flex space-x-8">
            <button 
              onClick={() => setActiveSection('video')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                activeSection === 'video' 
                  ? 'bg-orange-100 text-orange-700' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              <Play className="w-5 h-5" />
              <span>Générateur Vidéo</span>
            </button>
            <button 
              onClick={() => setActiveSection('image')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                activeSection === 'image' 
                  ? 'bg-orange-100 text-orange-700' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              <Image className="w-5 h-5" />
              <span>Générateur Visuel</span>
            </button>
            <button 
              onClick={() => setActiveSection('history')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                activeSection === 'history' 
                  ? 'bg-orange-100 text-orange-700' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              <History className="w-5 h-5" />
              <span>Historique</span>
            </button>
          </nav>
        </div>

        {/* Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {activeSection === 'video' && (
              <div className="bg-white rounded-xl shadow-sm border p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Créer une vidéo financière</h2>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Type de contenu
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500">
                      <option>Analyse de marché</option>
                      <option>Performance d'actions</option>
                      <option>Crypto-monnaies</option>
                      <option>Indices boursiers</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Symbole/Ticker
                    </label>
                    <input 
                      type="text" 
                      placeholder="Ex: AAPL, BTC, CAC40"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Période d'analyse
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500">
                      <option>1 jour</option>
                      <option>1 semaine</option>
                      <option>1 mois</option>
                      <option>3 mois</option>
                      <option>1 an</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Style de vidéo
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="border-2 border-gray-200 rounded-lg p-3 hover:border-orange-500 cursor-pointer">
                        <div className="w-full h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded mb-2"></div>
                        <p className="text-sm font-medium">Moderne</p>
                      </div>
                      <div className="border-2 border-gray-200 rounded-lg p-3 hover:border-orange-500 cursor-pointer">
                        <div className="w-full h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded mb-2"></div>
                        <p className="text-sm font-medium">Professionnel</p>
                      </div>
                    </div>
                  </div>

                  <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors">
                    Générer la vidéo
                  </button>
                </div>
              </div>
            )}

            {activeSection === 'image' && (
              <div className="bg-white rounded-xl shadow-sm border p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Créer un visuel financier</h2>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Format d'image
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="border-2 border-gray-200 rounded-lg p-3 hover:border-orange-500 cursor-pointer text-center">
                        <div className="w-full h-12 bg-gray-200 rounded mb-2"></div>
                        <p className="text-xs">Carré (1:1)</p>
                      </div>
                      <div className="border-2 border-gray-200 rounded-lg p-3 hover:border-orange-500 cursor-pointer text-center">
                        <div className="w-full h-8 bg-gray-200 rounded mb-2"></div>
                        <p className="text-xs">Paysage (16:9)</p>
                      </div>
                      <div className="border-2 border-gray-200 rounded-lg p-3 hover:border-orange-500 cursor-pointer text-center">
                        <div className="w-6 h-12 bg-gray-200 rounded mb-2 mx-auto"></div>
                        <p className="text-xs">Portrait (9:16)</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Données à afficher
                    </label>
                    <textarea 
                      placeholder="Entrez vos KPIs, données financières..."
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Couleurs du thème
                    </label>
                    <div className="flex space-x-2">
                      <div className="w-8 h-8 bg-blue-500 rounded cursor-pointer border-2 border-gray-300"></div>
                      <div className="w-8 h-8 bg-green-500 rounded cursor-pointer border-2 border-gray-300"></div>
                      <div className="w-8 h-8 bg-red-500 rounded cursor-pointer border-2 border-gray-300"></div>
                      <div className="w-8 h-8 bg-purple-500 rounded cursor-pointer border-2 border-gray-300"></div>
                      <div className="w-8 h-8 bg-orange-500 rounded cursor-pointer border-2 border-orange-500"></div>
                    </div>
                  </div>

                  <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors">
                    Générer l'image
                  </button>
                </div>
              </div>
            )}

            {activeSection === 'history' && (
              <div className="bg-white rounded-xl shadow-sm border p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Historique des créations</h2>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Play className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">Analyse AAPL - Mars 2024</h3>
                        <p className="text-sm text-gray-500">Créé il y a 2 heures</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-gray-400 hover:text-gray-600">
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <Image className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">KPIs Q1 2024</h3>
                        <p className="text-sm text-gray-500">Créé il y a 1 jour</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-gray-400 hover:text-gray-600">
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Modèles populaires</h3>
              <div className="space-y-3">
                <div className="cursor-pointer hover:bg-gray-50 p-2 rounded-lg">
                  <div className="w-full h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded mb-2"></div>
                  <p className="text-sm font-medium">Analyse technique</p>
                </div>
                <div className="cursor-pointer hover:bg-gray-50 p-2 rounded-lg">
                  <div className="w-full h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded mb-2"></div>
                  <p className="text-sm font-medium">Performance mensuelle</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Importer des données</h3>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Glissez vos fichiers CSV ici</p>
                <button className="mt-2 text-sm text-orange-600 hover:text-orange-700">
                  ou parcourir
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
