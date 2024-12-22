import Link from 'next/link';
import { FacebookIcon, Github, InstagramIcon, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container px-4 py-8 mx-auto">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Left side */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Quote Generator App
            </h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              Create beautiful, inspiring quotes for your designs with our AI-powered generator.
            </p>
          </div>

          {/* Right side */}
          <div className="space-y-4 md:text-right">
            <div className="space-y-2">
              <h4 className="text-sm font-semibold">Connect with us</h4>
              <div className="flex gap-4 md:justify-end">
                <Link
                  href="https://www.instagram.com/m.islam_benchaiba/profilecard/?igsh=MWhwbHB1NGp6ZGdqcA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-purple-600 transition-colors"
                >
                  <InstagramIcon className="w-5 h-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
            
                <Link
                  href="https://www.linkedin.com/in/m-islam-benchaiba/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-purple-600 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </footer>
  );
}
