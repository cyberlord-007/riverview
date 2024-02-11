import React from 'react';
import { FlexCol, FlexRow } from '../../atoms/Containers';
import { SchoolImg, TextWrapper } from './AboutStyles';

const School = () => {
  return (
    <FlexRow width={'100%'}>
      <FlexCol width={'40%'}>
        <SchoolImg />
      </FlexCol>
      <FlexCol centerX={true} width={'60%'}>
        <TextWrapper>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          repudiandae facilis sunt veniam id cumque ipsam similique fugit iste
          quasi at eos ut, et sapiente impedit, perferendis nemo! Facilis
          officia veniam a aut. Cum nisi cumque fuga repellendus quidem dolorum
          culpa expedita ipsa in repudiandae sit similique nostrum beatae iste
          error voluptates impedit, necessitatibus optio aperiam dolore quo
          corrupti inventore? Vitae animi, illum dicta labore eum laudantium
          earum. Reprehenderit praesentium commodi fuga, veritatis culpa
          distinctio est doloremque ad cupiditate eos esse labore ea amet. Nisi
          eius quibusdam et repellat laudantium maxime quasi suscipit at
          inventore sit ut ullam hic molestias quo, eligendi modi, vitae natus
          nesciunt quia voluptatem commodi facere qui aut tempore! Alias nostrum
          expedita nesciunt tenetur dolor explicabo. Consectetur magni molestias
          dicta delectus exercitationem temporibus laborum! Nobis repudiandae
          nulla, laboriosam, cum at rem, eum ad perferendis dicta soluta qui
          neque suscipit minus? Voluptatibus praesentium cumque aliquid soluta
          sunt in facere quae dolores distinctio dolore! Minima, qui, odit sint
          nostrum iste tempore necessitatibus aspernatur id blanditiis, cum
          porro et adipisci provident sequi at! Adipisci quasi impedit similique
          iure quaerat maiores libero aliquam, reprehenderit facere quidem in
          odio illum mollitia quis nam. Adipisci, odio error ducimus temporibus
          vel sint asperiores!
        </TextWrapper>
      </FlexCol>
    </FlexRow>
  );
};

export default School;
