import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/shadcdn/ui/table";

import "./SocialMediaRead.css";

export default function SocialMediaRead() {
  return (
    <section id="social-media-read">
      <Table>
        <TableBody>
          <TableRow className="w-[30%]">
            <TableCell className="text-center">Nom</TableCell>
            <TableCell>Social media</TableCell>
          </TableRow>
          <TableRow className="w-[70%]">
            <TableCell className="text-center">Slug</TableCell>
            <TableCell>social-media</TableCell>
          </TableRow>
          <TableRow className="w-[70%]">
            <TableCell className="text-center">Image</TableCell>
            <TableCell>
              <img
                src="https://placehold.co/150x150"
                alt="social media image"
                width={150}
                height={150}
                style={{ width: "150px" }}
              />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </section>
  );
}
