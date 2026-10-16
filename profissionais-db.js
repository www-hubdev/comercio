
/* =========================================
   SERVIÇOS ANGOLA — DADOS DO SUPABASE
   Carrega apenas profissionais aprovados
========================================= */

async function carregarProfissionais() {
    const { data, error } = await supabaseClient
        .from('profissionais')
        .select(`
            id,
            nome,
            whatsapp,
            categoria,
            experiencia,
            servicos,
            descricao,
            zona,
            provincia,
            municipio,
            bairro,
            foto_url,
            trabalhos,
            estado,
            criado_em
        `)
        .eq('estado', 'aprovado')
        .order('criado_em', { ascending: false });

    if (error) {
        console.error(
            'Erro ao carregar profissionais do Supabase:',
            error.message
        );

        throw error;
    }

    // Substituir os dados de exemplo pelos dados do Supabase.
    PROFISSIONAIS.length = 0;

    data.forEach(p => {
        PROFISSIONAIS.push({
            ...p,
            foto: p.foto_url || '',
            servicos: Array.isArray(p.servicos) ? p.servicos : [],
            trabalhos: Array.isArray(p.trabalhos) ? p.trabalhos : []
        });
    });

    console.log(
        'Profissionais aprovados carregados:',
        PROFISSIONAIS.length
    );

    return PROFISSIONAIS;
}
