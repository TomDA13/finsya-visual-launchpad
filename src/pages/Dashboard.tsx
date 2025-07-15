
import React, { useState } from 'react';
import { Home, Video, Image, Clock, User, Crown, Settings, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Accueil', icon: Home },
    { id: 'video', label: 'Générateur Vidéo', icon: Video },
    { id: 'visual', label: 'Générateur Visuel', icon: Image },
    { id: 'history', label: 'Historique', icon: Clock },
  ];

  const renderHomeSection = () => (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Bienvenue sur <span className="text-[#FA5003]">Finsya Visual</span>
          </h1>
          <p className="text-xl text-gray-600">
            Créez des visuels et vidéos de finance professionnels en un clic
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div 
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all cursor-pointer"
            onClick={() => setActiveSection('video')}
          >
            <div className="w-16 h-16 bg-gradient-to-r from-[#FA5003] to-[#FF6B2B] rounded-2xl flex items-center justify-center mb-6">
              <Video className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Générateur Vidéo</h3>
            <p className="text-gray-600 mb-6">
              Créez des animations de cours d'actions et graphiques financiers dynamiques
            </p>
            <Button className="w-full bg-[#FA5003] hover:bg-[#E8440A]">
              Créer une vidéo
            </Button>
          </div>

          <div 
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all cursor-pointer"
            onClick={() => setActiveSection('visual')}
          >
            <div className="w-16 h-16 bg-gradient-to-r from-[#FA5003] to-[#FF6B2B] rounded-2xl flex items-center justify-center mb-6">
              <Image className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Générateur Visuel</h3>
            <p className="text-gray-600 mb-6">
              Générez des cartes visuelles avec KPIs et statistiques financières
            </p>
            <Button className="w-full bg-[#FA5003] hover:bg-[#E8440A]">
              Créer un visuel
            </Button>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#FA5003] to-[#FF6B2B] p-8 rounded-2xl text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2">Version Gratuite</h3>
              <p className="opacity-90">5 créations par mois • Watermark inclus</p>
            </div>
            <Button 
              className="bg-white text-[#FA5003] hover:bg-gray-100"
              onClick={() => setShowUpgradeModal(true)}
            >
              <Crown className="w-4 h-4 mr-2" />
              Passer Pro
            </Button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderVideoSection = () => (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Générateur d'Animation Finance</h2>
        
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Ticker</label>
                <input 
                  type="text" 
                  placeholder="Ex: AAPL, MSFT, TSLA" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FA5003] focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Période</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FA5003]">
                  <option>1 mois</option>
                  <option>3 mois</option>
                  <option>6 mois</option>
                  <option>1 an</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Type de graphique</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FA5003]">
                  <option>Courbe</option>
                  <option>Chandelier</option>
                  <option>Barres</option>
                </select>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Format</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FA5003]">
                  <option>16:9 (Paysage)</option>
                  <option>9:16 (Portrait)</option>
                  <option>1:1 (Carré)</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Couleur principale</label>
                <div className="flex space-x-2">
                  <div className="w-10 h-10 bg-[#FA5003] rounded-lg cursor-pointer border-2 border-[#FA5003]"></div>
                  <div className="w-10 h-10 bg-green-500 rounded-lg cursor-pointer border-2 border-transparent hover:border-gray-300"></div>
                  <div className="w-10 h-10 bg-blue-500 rounded-lg cursor-pointer border-2 border-transparent hover:border-gray-300"></div>
                  <div className="w-10 h-10 bg-purple-500 rounded-lg cursor-pointer border-2 border-transparent hover:border-gray-300"></div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-[#FA5003] rounded" />
                <label className="text-sm text-gray-700">Mode sombre</label>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200">
            <Button className="w-full bg-[#FA5003] hover:bg-[#E8440A] text-lg py-4">
              <Video className="w-5 h-5 mr-2" />
              Générer la vidéo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderVisualSection = () => (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Générateur de Visuel Finance</h2>
        
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Entreprise</label>
                <input 
                  type="text" 
                  placeholder="Ex: Apple, Microsoft, Tesla" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FA5003] focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">KPIs à afficher</label>
                <div className="space-y-2">
                  {['Market Cap', 'Chiffre d\'affaires', 'Bénéfice net', 'P/E Ratio', 'Croissance CA'].map((kpi) => (
                    <div key={kpi} className="flex items-center space-x-3">
                      <input type="checkbox" className="w-4 h-4 text-[#FA5003] rounded" />
                      <label className="text-sm text-gray-700">{kpi}</label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mise en page</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FA5003]">
                  <option>Carte moderne</option>
                  <option>Tableau comparatif</option>
                  <option>Infographie</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Couleurs</label>
                <div className="flex space-x-2">
                  <div className="w-10 h-10 bg-[#FA5003] rounded-lg cursor-pointer border-2 border-[#FA5003]"></div>
                  <div className="w-10 h-10 bg-green-500 rounded-lg cursor-pointer border-2 border-transparent hover:border-gray-300"></div>
                  <div className="w-10 h-10 bg-blue-500 rounded-lg cursor-pointer border-2 border-transparent hover:border-gray-300"></div>
                  <div className="w-10 h-10 bg-purple-500 rounded-lg cursor-pointer border-2 border-transparent hover:border-gray-300"></div>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Format</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FA5003]">
                  <option>LinkedIn (1200x630)</option>
                  <option>Instagram (1080x1080)</option>
                  <option>Twitter (1024x512)</option>
                </select>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200">
            <Button className="w-full bg-[#FA5003] hover:bg-[#E8440A] text-lg py-4">
              <Image className="w-5 h-5 mr-2" />
              Générer le visuel
            </Button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderHistorySection = () => (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Historique des créations</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-full h-32 bg-gradient-to-br from-[#FA5003] to-[#FF6B2B] rounded-xl mb-4 flex items-center justify-center">
                <Video className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">AAPL Animation</h3>
              <p className="text-sm text-gray-600 mb-4">Créé il y a 2 jours</p>
              <Button className="w-full text-sm" variant="outline">
                Télécharger
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'video': return renderVideoSection();
      case 'visual': return renderVisualSection();
      case 'history': return renderHistorySection();
      default: return renderHomeSection();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-16'} bg-white shadow-lg transition-all duration-300 flex flex-col`}>
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            {sidebarOpen && (
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#FA5003] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">F</span>
                </div>
                <span className="text-xl font-bold text-gray-900">Finsya Visual</span>
              </div>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full flex items-center px-4 py-3 rounded-xl transition-all ${
                    activeSection === item.id
                      ? 'bg-[#FA5003] text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  {sidebarOpen && <span className="ml-3">{item.label}</span>}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <div className="flex items-center space-x-4">
              <Button
                onClick={() => setShowUpgradeModal(true)}
                className="bg-gradient-to-r from-[#FA5003] to-[#FF6B2B] text-white"
              >
                <Crown className="w-4 h-4 mr-2" />
                Upgrade Premium
              </Button>
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-gray-600" />
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-auto">
          {renderContent()}
        </main>
      </div>

      {/* Upgrade Modal */}
      {showUpgradeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-2xl max-w-md w-full mx-4">
            <div className="text-center">
              <Crown className="w-16 h-16 text-[#FA5003] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Passer Pro</h3>
              <p className="text-gray-600 mb-6">
                Débloquez toutes les fonctionnalités premium pour seulement 5€/mois
              </p>
              <div className="space-y-4">
                <Button className="w-full bg-[#FA5003] hover:bg-[#E8440A]">
                  Upgrade maintenant
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => setShowUpgradeModal(false)}
                >
                  Plus tard
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
