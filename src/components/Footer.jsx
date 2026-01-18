'use client';
import {
  Menu,
  X,
  Code,
  BookOpen,
  Users,
  Award,
  DollarSign,
  MessageCircle,
  ChevronDown,
} from "lucide-react";
const Footer = () => {
  return (
    <div>
      <footer className="bg-white text-black py-8 px-4 border-t border-gray-200">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Code className="w-6 h-6" />
            <span className="text-xl font-semibold">PathToCode</span>
          </div>
          <p className="text-gray-400 mb-4">Making programming accessible to everyone</p>
          <p className="text-sm text-gray-500">© 2026 PathToCode. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
