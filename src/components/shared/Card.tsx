import Link from "next/link";
import Image from "next/image";
const Card = ({ subject }: { subject: SubjectProps }) => {
    return (
      <li>
        <Link href={`/${subject.subjectCode}`} className="collection-card">
          
          <div className="flex-between">
            <p className="p-20-semibold mr-3 line-clamp-1 text-dark-600">
              {subject.subjName}
              {subject.year}
              {subject.sem}
            </p>
            <Image
              src={subject.image}
              alt={subject.subjectCode}
              width={24}
              height={24}
            />
          </div>
        </Link>
      </li>
    );
  };