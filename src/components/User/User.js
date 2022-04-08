import { useEffect } from "react";

import { details, table } from "constants/components/supplier";
import { OverviewTable, Icon } from "components";
import * as S from "./styles";

/**
 * This component will be only use in Drawer as a content
 * @param {string} supplierId Id to fetch supplier data
 */
const User = ({ userId }) => {
  useEffect(() => {
    // This will be use to fetch
    // supplier information from endpoints
    // with {supplierId}
    console.log("userId", userId);
  }, []);

  return (
    <S.Supplier>
      <S.Title>AMA</S.Title>
      <S.Image src="/assets/images/supplier-pic.png" alt="Supplier" />
      {details.map((detail) => (
        <S.Details key={detail.header}>
          <S.DetailsTitle>{detail.header}</S.DetailsTitle>
          {detail.rows.map((row) => (
            <S.Detail key={row.title}>
              <S.DetailTitle>{row.title}</S.DetailTitle>
              <S.DetailDesc>{row.desc}</S.DetailDesc>
            </S.Detail>
          ))}
        </S.Details>
      ))}
      <S.Title>Invoice Overview</S.Title>
      <OverviewTable payload={table} />
      <S.Title>Products</S.Title>
      <S.Products>
        <S.Product>Spatula</S.Product>
        <S.Product>Spoons</S.Product>
        <S.Product>Pans</S.Product>
      </S.Products>
      <S.Title>Notes</S.Title>
      <S.Notes>
        <S.Note>
          I&apos;ve been working with this client for the past 3 months for
          consultin services. It seem we&apos;ll continue to work together.
        </S.Note>
      </S.Notes>
      <S.Title>Attachments</S.Title>
      <S.Attachments>
        <S.Attachment>
          <Icon name="insert-drive-file" />
          <S.AttachmentName>File for discussion - 1</S.AttachmentName>
        </S.Attachment>
        <S.Attachment>
          <Icon name="insert-drive-file" />
          <S.AttachmentName>file.pdf</S.AttachmentName>
        </S.Attachment>
      </S.Attachments>
    </S.Supplier>
  );
};

export default User;
