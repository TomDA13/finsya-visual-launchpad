
import React, { useState } from 'react';
import { ArrowLeft, Play, Image, History, Download, Upload, Settings, Plus, X, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('video');
  const [tickers, setTickers] = useState([{ symbol: 'AAPL.US', color: '#3B82F6' }]);
  const [imageTickers, setImageTickers] = useState([{ symbol: 'AAPL.US', color: '#3B82F6' }, { symbol: 'AAPL.US', color: '#10B981' }]);
  const [charts, setCharts] = useState([
    { name: 'Capitalisation boursière' },
    { name: 'Chiffre d\'Affaires' },
    { name: 'Free Cash Flow par action' },
    { name: 'Bénéfice par action' }
  ]);

  const addTicker = () => {
    setTickers([...tickers, { symbol: '', color: '#3B82F6' }]);
  };

  const removeTicker = (index: number) => {
    if (tickers.length > 1) {
      setTickers(tickers.filter((_, i) => i !== index));
    }
  };

  const updateTicker = (index: number, field: 'symbol' | 'color', value: string) => {
    const updatedTickers = tickers.map((ticker, i) => 
      i === index ? { ...ticker, [field]: value } : ticker
    );
    setTickers(updatedTickers);
  };

  const addImageTicker = () => {
    setImageTickers([...imageTickers, { symbol: '', color: '#3B82F6' }]);
  };

  const removeImageTicker = (index: number) => {
    if (imageTickers.length > 1) {
      setImageTickers(imageTickers.filter((_, i) => i !== index));
    }
  };

  const updateImageTicker = (index: number, field: 'symbol' | 'color', value: string) => {
    const updatedTickers = imageTickers.map((ticker, i) => 
      i === index ? { ...ticker, [field]: value } : ticker
    );
    setImageTickers(updatedTickers);
  };

  const addChart = () => {
    setCharts([...charts, { name: '' }]);
  };

  const removeChart = (index: number) => {
    setCharts(charts.filter((_, i) => i !== index));
  };

  const updateChart = (index: number, name: string) => {
    const updatedCharts = charts.map((chart, i) => 
      i === index ? { ...chart, name } : chart
    );
    setCharts(updatedCharts);
  };

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
              <div className="bg-white rounded-xl shadow-sm border p-8">
                <div className="space-y-6">
                  {/* Tickers Section */}
                  <div>
                    <Label className="block text-sm font-medium text-gray-900 mb-3">
                      Tickers Moning (ex. : AAPL.US)
                    </Label>
                    <div className="space-y-3">
                      {tickers.map((ticker, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="flex-1">
                            <Input
                              type="text"
                              placeholder="AAPL.US"
                              value={ticker.symbol}
                              onChange={(e) => updateTicker(index, 'symbol', e.target.value)}
                              className="w-full"
                            />
                          </div>
                          <input
                            type="color"
                            value={ticker.color}
                            onChange={(e) => updateTicker(index, 'color', e.target.value)}
                            className="w-10 h-10 rounded border border-gray-300 cursor-pointer"
                          />
                          {tickers.length > 1 && (
                            <button
                              onClick={() => removeTicker(index)}
                              className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 rounded transition-colors"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                    <button
                      onClick={addTicker}
                      className="mt-3 text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-1"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Ajouter un ticker</span>
                    </button>
                  </div>

                  {/* Date Range */}
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <Label className="block text-sm font-medium text-gray-900 mb-3">
                        Mois de départ
                      </Label>
                      <Input type="date" className="w-full" />
                    </div>
                    <div>
                      <Label className="block text-sm font-medium text-gray-900 mb-3">
                        Mois de fin
                      </Label>
                      <Input type="date" className="w-full" />
                    </div>
                  </div>

                  {/* Format and Dark Mode */}
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <Label className="block text-sm font-medium text-gray-900 mb-3">
                        Format
                      </Label>
                      <select className="w-full h-10 px-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-white">
                        <option>16/9</option>
                        <option>9/16</option>
                        <option>1:1</option>
                      </select>
                    </div>
                    <div>
                      <Label className="block text-sm font-medium text-gray-900 mb-3">
                        Mode sombre
                      </Label>
                      <select className="w-full h-10 px-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-white">
                        <option>non</option>
                        <option>oui</option>
                      </select>
                    </div>
                  </div>

                  {/* Investment Type and Value */}
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <Label className="block text-sm font-medium text-gray-900 mb-3">
                        Type d'investissement
                      </Label>
                      <select className="w-full h-10 px-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-white">
                        <option>Unique au départ</option>
                        <option>Investissement programmé</option>
                        <option>DCA mensuel</option>
                      </select>
                    </div>
                    <div>
                      <Label className="block text-sm font-medium text-gray-900 mb-3">
                        Valeur d'investissement
                      </Label>
                      <Input
                        type="number"
                        placeholder="100"
                        defaultValue="100"
                        className="w-full"
                      />
                    </div>
                  </div>

                  {/* Chart Type */}
                  <div>
                    <Label className="block text-sm font-medium text-gray-900 mb-3">
                      Type de graphique
                    </Label>
                    <select className="w-full h-10 px-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-white">
                      <option>Lignes</option>
                      <option>Barres</option>
                      <option>Aires</option>
                      <option>Chandelier</option>
                    </select>
                  </div>

                  <div className="pt-6">
                    <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg font-medium transition-colors">
                      Générer
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'image' && (
              <div className="bg-white rounded-xl shadow-sm border p-8">
                <div className="space-y-6">
                  {/* Tickers Section for Images */}
                  <div>
                    <Label className="block text-sm font-medium text-gray-900 mb-3">
                      Tickers Moning (ex. : AAPL.US)
                    </Label>
                    <div className="space-y-3">
                      {imageTickers.map((ticker, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="flex-1">
                            <Input
                              type="text"
                              placeholder="AAPL.US"
                              value={ticker.symbol}
                              onChange={(e) => updateImageTicker(index, 'symbol', e.target.value)}
                              className="w-full"
                            />
                          </div>
                          <input
                            type="color"
                            value={ticker.color}
                            onChange={(e) => updateImageTicker(index, 'color', e.target.value)}
                            className="w-10 h-10 rounded border border-gray-300 cursor-pointer"
                          />
                          {imageTickers.length > 1 && (
                            <button
                              onClick={() => removeImageTicker(index)}
                              className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 rounded transition-colors"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Charts Section */}
                  <div>
                    <Label className="block text-sm font-medium text-gray-900 mb-3">
                      Graphiques
                    </Label>
                    <div className="space-y-3">
                      {charts.map((chart, index) => (
                        <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                          <span className="text-gray-900">{chart.name}</span>
                          <button
                            onClick={() => removeChart(index)}
                            className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-red-500 transition-colors"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                    <button
                      onClick={addChart}
                      className="mt-3 text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-1"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Ajouter un graphique</span>
                    </button>
                  </div>

                  <div className="pt-6">
                    <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg font-medium transition-colors">
                      Générer
                    </button>
                  </div>
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
