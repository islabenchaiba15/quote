import { Card, CardContent } from "./ui/card"

function FeatureCard({ icon, title, description }) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
          <div className="text-purple-600">
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}

export default FeatureCard