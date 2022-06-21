import { SeachLoadingStyle } from './styles';

export const SeachLoading = () => {
  return (
    <SeachLoadingStyle>
      <section>
        {[1, 2, 3].map((i) => (
          <div key={i}></div>
        ))}
      </section>
    </SeachLoadingStyle>
  );
};
