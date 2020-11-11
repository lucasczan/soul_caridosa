import React, {useState, useContext} from 'react';
import {Text, CheckBox, View, ScrollView} from 'react-native';
import {Overlay} from 'react-native-elements';

import {Container} from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from '../../context/AuthContext';

const SignUp = () => {
  const navigator = useNavigation();
  const [user, setUser] = useState({});
  const [accpetTerms, setAcceptTerms] = useState(false);
  const {SignUpContext} = useContext(AuthContext);
  const [visible, setVisible] = useState(false);

  const handleAccount = () => {
    if (
      user.name &&
      user.email &&
      user.password &&
      user.confirmPassword &&
      user.cpf
    ) {
      if (accpetTerms) {
        if (user.password === user.confirmPassword) {
          SignUpContext(user);
          navigator.navigate('Inicio');
        } else {
          alert('As senham devem ser iguais.');
        }
      } else {
        alert(
          'É necessário aceitar os termos de uso d aplicativo para se cadastrar.',
        );
      }
    } else {
      alert('Preencha todos os campos.');
    }
  };

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <Container>
      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <View
          style={{
            width: '70%',
            height: 400,
            alignItems: 'center',
            padding: 20,
          }}>
          <ScrollView style={{height: 600}}>
            <Text style={{marginBottom: 10, fontWeight: 'bold'}}>
              Política de Privacidade Aplicativo Soul Caridosa O aplicativo Soul
            </Text>
            <Text>
              Caridosa faz parte da Rede de Assistência à Pessoas em Situação de
              Rua e Necessitados Soul Caridosa e sua privacidade é importante
              para nós. É política da Rede de Assistência à Pessoas em Situação
              de Rua e Necessitados Soul Caridosa respeitar a sua privacidade em
              relação a qualquer informação sua que possamos coletar no
              aplicativo Soul Caridosa. Solicitamos informações pessoais apenas
              quando realmente precisamos delas para lhe fornecer um serviço.
              Fazendo por meios justos e legais, com o seu conhecimento e
              consentimento. Também informamos por que estamos coletando e como
              será usado. Apenas retemos as informações coletadas pelo tempo
              necessário para fornecer o serviço solicitado. Quando armazenamos
              dados, protegemos dentro de meios comercialmente aceitáveis ​​para
              evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou
              modificação não autorizados. Não compartilhamos informações de
              identificação pessoal publicamente ou com terceiros, exceto quando
              exigido por lei ou se necessário para prestação de algum serviço
              ou identificação de um voluntário para buscar doações. Você é
              livre para recusar a nossa solicitação de informações pessoais,
              entendendo que talvez não possamos fornecer alguns dos serviços
              desejados. O uso continuado de nosso aplicativo será considerado
              como aceitação de nossas práticas em torno de privacidade e
              informações pessoais. Se você tiver alguma dúvida sobre como
              lidamos com dados do usuário e informações pessoais, entre em
              contacto conosco. Compromisso do Usuário O usuário se compromete a
              fazer uso adequado dos conteúdos e da informação que o Rede de
              Assistência à Pessoas em Situação de Rua e Necessitados Soul
              Caridosa oferece no aplicativo e com caráter enunciativo, mas não
              limitativo: • A) Não se envolver em atividades que sejam ilegais
              ou contrárias à boa fé a à ordem pública; • B) Não divulgar
              conteúdo ou propaganda de natureza racista, xenofóbica, apostas
              online, pornografia ilegal, de apologia ao terrorismo ou contra os
              direitos humanos; • C) Não causar danos aos sistemas físicos
              (hardwares) e lógicos (softwares) do Rede de Assistência à Pessoas
              em Situação de Rua e Necessitados Soul Caridosa, de seus
              fornecedores ou terceiros, para introduzir ou disseminar vírus
              informáticos ou quaisquer outros sistemas de hardware ou software
              que sejam capazes de causar danos anteriormente mencionados. • D)
              Informar apenas localizações existentes para não prejudicar os
              demais usuários do aplicativo. • E) Excluir uma localização apenas
              quando não houver mais nenhuma pessoa a ser localizada onde o mapa
              esta apontando. Mais informações Esperemos que esteja esclarecido
              e, como mencionado anteriormente, se houver algo que você não tem
              certeza se precisa ou não, geralmente é mais seguro deixar os
              cookies ativados, caso interaja com um dos recursos que você usa
              em nosso aplicativo. Esta política é efetiva a partir
              de Novembro/2020 Termos & Condições 1. Termos O aplicativo Soul
              Caridosa faz parte da Rede de Assistência à Pessoas em Situação de
              Rua e Necessitados Soul Caridosa. Ao acessar ao aplicativo Soul
              Caridosa, você concorda em cumprir estes termos de serviço, todas
              as leis e regulamentos aplicáveis ​​e concorda que é responsável
              pelo cumprimento de todas as leis locais aplicáveis. Se você não
              concordar com algum desses termos, está proibido de usar ou
              acessar este aplicativo. Os materiais contidos neste aplicativo
              são protegidos pelas leis de direitos autorais e marcas comerciais
              aplicáveis. 2. Uso de Licença É concedida permissão para baixar
              temporariamente uma cópia dos materiais (informações ou software)
              no aplicativo da Rede de Assistência à Pessoas em Situação de Rua
              e Necessitados Soul Caridosa , apenas para visualização
              transitória pessoal e não comercial. Esta é a concessão de uma
              licença, não uma transferência de título e, sob esta licença, você
              não pode: • modificar ou copiar os materiais; • usar os materiais
              para qualquer finalidade comercial ou para exibição pública
              (comercial ou não comercial); • tentar descompilar ou fazer
              engenharia reversa de qualquer software contido no aplicativo Soul
              Caridosa; • remover quaisquer direitos autorais ou outras notações
              de propriedade dos materiais; ou • transferir os materiais para
              outra pessoa ou 'espelhe' os materiais em qualquer outro servidor.
              Esta licença será automaticamente rescindida se você violar alguma
              dessas restrições e poderá ser rescindida por Rede de Assistência
              à Pessoas em Situação de Rua e Necessitados Soul Caridosa a
              qualquer momento. Ao encerrar a visualização desses materiais ou
              após o término desta licença, você deve apagar todos os materiais
              baixados em sua posse, seja em formato eletrônico ou impresso. 3.
              Isenção de responsabilidade Os materiais no aplicativo Soul
              Caridosa são fornecidos 'como estão'. A Rede de Assistência à
              Pessoas em Situação de Rua e Necessitados Soul Caridosa não
              oferece garantias, expressas ou implícitas, e, por este meio,
              isenta e nega todas as outras garantias, incluindo, sem limitação,
              garantias implícitas ou condições de comercialização, adequação a
              um fim específico ou não violação de propriedade intelectual ou
              outra violação de direitos. 4. Limitações Em nenhum caso o Rede de
              Assistência à Pessoas em Situação de Rua e Necessitados Soul
              Caridosa ou seus fornecedores serão responsáveis ​​por quaisquer
              danos (incluindo, sem limitação, danos por perda de dados ou lucro
              ou devido a interrupção dos negócios) decorrentes do uso ou da
              incapacidade de usar os materiais em Rede de Assistência à Pessoas
              em Situação de Rua e Necessitados Soul Caridosa, mesmo que Rede de
              Assistência à Pessoas em Situação de Rua e Necessitados Soul
              Caridosa ou um representante autorizado da Rede de Assistência à
              Pessoas em Situação de Rua e Necessitados Soul Caridosa tenha sido
              notificado oralmente ou por escrito da possibilidade de tais
              danos. Como algumas jurisdições não permitem limitações em
              garantias implícitas, ou limitações de responsabilidade por danos
              consequentes ou incidentais, essas limitações podem não se aplicar
              a você. 5. Precisão dos materiais Os materiais exibidos no
              aplicativo da Rede de Assistência à Pessoas em Situação de Rua e
              Necessitados Soul Caridosa podem incluir erros técnicos,
              tipográficos ou fotográficos. Rede de Assistência à Pessoas em
              Situação de Rua e Necessitados Soul Caridosa não garante que
              qualquer material em seu aplicativo seja preciso, completo ou
              atual. Rede de Assistência à Pessoas em Situação de Rua e
              Necessitados Soul Caridosa pode fazer alterações nos materiais
              contidos em seu aplicativo a qualquer momento, sem aviso prévio.
              No entanto, Rede de Assistência à Pessoas em Situação de Rua e
              Necessitados Soul Caridosa não se compromete a atualizar os
              materiais. Modificações O Rede de Assistência à Pessoas em
              Situação de Rua e Necessitados Soul Caridosa pode revisar estes
              termos de serviço do aplicativo a qualquer momento, sem aviso
              prévio. Ao usar este aplicativo, você concorda em ficar vinculado
              à versão atual desses termos de serviço. Lei aplicável Estes
              termos e condições são regidos e interpretados de acordo com as
              leis do Rede de Assistência à Pessoas em Situação de Rua e
              Necessitados Soul Caridosa e você se submete irrevogavelmente à
              jurisdição exclusiva dos tribunais naquele estado ou localidade.
            </Text>
          </ScrollView>
        </View>
      </Overlay>
      <Text style={{fontSize: 32}}>Cadastro</Text>
      <Input
        onChange={(text) => setUser({...user, name: text})}
        style={{marginTop: 30}}
        placeholderText="Nome..."
      />
      <Input
        onChange={(text) => setUser({...user, cpf: text})}
        placeholderText="CPF..."
      />
      <Input
        onChange={(text) => setUser({...user, email: text})}
        placeholderText="Email..."
      />
      <Input
        onChange={(text) => setUser({...user, password: text})}
        placeholderText="Senha..."
        maxLength={8}
        password
      />
      <Input
        onChange={(text) => setUser({...user, confirmPassword: text})}
        placeholderText="Confirmar senha..."
        maxLength={8}
        password
      />
      <View
        style={{
          marginTop: 20,
          justifyContent: 'flex-start',
          flexDirection: 'row',
          alignItems: 'center',
          width: '70%',
        }}>
        <CheckBox
          value={accpetTerms}
          onValueChange={() => setAcceptTerms(!accpetTerms)}
        />
        <Text onPress={() => toggleOverlay()}>Aceitar termos de uso.</Text>
      </View>
      <Button
        onPress={() => handleAccount()}
        main
        style={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 1,
          shadowRadius: 3.84,
          elevation: 5,
          marginTop: 80,
        }}>
        <Text style={{color: '#fff'}}>CADASTRAR</Text>
      </Button>
      <Button
        onPress={() => navigator.navigate('Inicio')}
        style={{
          marginTop: 20,
        }}>
        <Text style={{color: '#1e98d7'}}>VOLTAR</Text>
      </Button>
    </Container>
  );
};

export default SignUp;
